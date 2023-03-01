import { getPlaylist } from '@fabricio-191/youtube'
import fs from 'node:fs'
import videosToSkip from './utils/videostoskip.mjs'
import createVideoSuccessFile from './utils/createvideosuccessfile.mjs'
import createActionInputFile from './utils/createactioninputfile.mjs'

/**
 * This module downloads a playlist from URL
 * Set YT_PLAYLIST passed by the shell script
 * Extract and write files with video IDs to be used
 * as input for episode.json for uploading to AnchorFM
 *
 */

// Passed by the shell script
const YT_PLAYLIST = process.argv[2]

// For debugging
// const YT_PLAYLIST = "https://www.youtube.com/watch?v=ABbDB6xri8o&list=PLrAXtmErZgOcl7mvyfkQTHFnOGZxWtN55"

// Functionality entry point
// Starts with downloading playlist information
downloadPlaylistJSON(YT_PLAYLIST)

/**
 * Downloads the playlist using the npm package https://www.npmjs.com/package/@fabricio-191/youtube
 * and call an iterator over the playlist
 */
function downloadPlaylistJSON(URL) {

  console.log("=========== PLAYLIST ===============\n")
  console.log("URL:", URL)

  getPlaylist(URL)
    .then(data => {
      fs.writeFile('./playlist.json', JSON.stringify(data), err => {
        if (err) {
          console.error("Error in writing playlist data", err)
        }
        console.log("Playlist downloaded successfully \n")
        console.log("======== SKIP OR PROCESS ===============")
        episodeIterator()
        // console.log(data)
      });
    })
    .catch(console.error)
}

/**
 * Iterates over the videos in the playlist downloaded
 */
function episodeIterator() {

  // Read the playlist file downloaded
  fs.readFile('playlist.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    const playlistDataObj = JSON.parse(data)

    // Videos array which has video information objects
    var videosArray = playlistDataObj.videos

    // Create an array that has all the video IDs
    const playlistIDArray = videosArray.map(element => {
      return element.ID
    })
    
    var notConverted = videosToSkip(playlistIDArray)

    // Iterate over the length of fetched playlist
    if (notConverted.length == 0 && playlistIDArray.length == 0){
      console.log("No video to convert. Please check cronJob.log for more information")
    }else{
      for (let index = 0; index < notConverted.length; index++) {
        console.log(`-> Convert and upload video with id ${notConverted[index]}`)
        createVideoSuccessFile(notConverted[index])
        createActionInputFile(notConverted[index])
      }
    }
  });
  return 0
}