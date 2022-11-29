import { getPlaylist } from '@fabricio-191/youtube'
import fs from 'node:fs'
import getVideoID from './utils/getvideoid.mjs'
import videosToSkip from './utils/videostoskip.mjs'
import createVideoSuccessFile from './utils/createvideosuccessfile.mjs'

/**
 * This module downloads a playlist from URL
 * Set YT_PLAYLIST
 * Extract and write files with video IDs to be used
 * as input for episode.json for uploading to AnchorFM
 *
 */

// Entrypoint
// Starts with downloading playlist information
downloadPlaylistJSON()

/**
 * Downloads the playlist using the npm package https://www.npmjs.com/package/@fabricio-191/youtube
 * and call an iterator over the playlist
 */
function downloadPlaylistJSON() {
  // TODO: Remove in the end before handover
  // Remove before commit to repo everytime in debugging
  // episodeIterator();

  // ADD: Youtube Playlist URL that you want to process
  const YT_PLAYLIST="https://www.youtube.com/watch?v=ABbDB6xri8o&list=PLrAXtmErZgOcl7mvyfkQTHFnOGZxWtN55"

  console.log("=========== PLAYLIST ===============\n")
  console.log("URL:", YT_PLAYLIST)

  getPlaylist(YT_PLAYLIST)
    .then(data => {
      fs.writeFile('./playlist.json', JSON.stringify(data), err => {
        if (err) {
          console.error("Error in writing playlist data", err)
        }
        console.log("Playlist downloaded successfully \n")
        console.log("======== SKIP OR PROCESS ===============\n")
        episodeIterator()
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
    // Number of items in the playlist
    const videoCount = videosArray.length

    // Create an array that has all the video IDs
    const playlistIDArray = videosArray.map(element => {
      return element.ID
    })

    // Iterate over the length of fetched playlist
    for (let index = 0; index < videoCount; index++) {
      // Video ID at index in fetched playlist
      var videoID = videosArray[index].ID
      var toSkip = videosToSkip(index, playlistIDArray)

      // Skip conversion and upload on
      // If not to skip
      if (!toSkip) {
        console.log(`-> Convert and upload video with id ${videoID}`)
        getVideoID(playlistDataObj.videos[index], index)
        createVideoSuccessFile(playlistDataObj.videos[index])
      } else {
        // Skip video with id
        console.log(`Skip video with id ${videoID}`)
      }
    }
  });
  return 0
}