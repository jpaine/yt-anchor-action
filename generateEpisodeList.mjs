/**
 * This module downloads a playlist from URL
 * Set YT_PLAYLIST
 * Extract and write files with video IDs to be used
 * as input for episode.json for uploading to AnchorFM
 *
 */

import { getPlaylist } from '@fabricio-191/youtube'
import fs from 'node:fs'

// Entrypoint to download playlist information
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
      console.error(err);
      return;
    }
    const playlistDataObj = JSON.parse(data);

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

      // Assumption: The order of objects in the videos array does not change
      var toSkip = videosToSkip(index, playlistIDArray)

      // Videos to skip and not skip
      // If not to skip
      if (!toSkip) {
        console.log(`-> Convert and upload video with id ${videoID}`)
        getVideoID(playlistDataObj.videos[index], index)

        // TODO: Add object to converted.json
      } else {
        console.log(`Skip video with id ${videoID}`)
      }
    }
  });
}

/**
 * 
 * @param {object} data - single video object 
 * @param {number} index - index of video object
 */

function getVideoID(data, index) {
  var videoObj = {
    id: data.ID
  }
  createActionInputFile(videoObj, index)
}


/**
 * Function that tells if a video has been already processed
 * 
 * @param {Number} index Index of current playlist video object being processed
 * @param {Array} playlistIDArray All playlist video IDs
 * @returns {boolean} If video already converted return true, else false
 */

function videosToSkip(index, playlistIDArray) {
  var convertedVideoID
  try {
    // Read the file that stores converted videos objects
    const convertedVideosObj = JSON.parse(fs.readFileSync('convertedVideos.json', 'utf8'));
    
    // If playlist video count exceeds already converted count
    if (index >= convertedVideosObj.videos.length) {
      return false
    } else {
      convertedVideoID = convertedVideosObj.videos[index].ID
      // Check if a video is already converted
      const toSkip = playlistIDArray.includes(convertedVideoID)
      return toSkip
    }
  } catch (err) {
    console.error(err);
  }
}

/**
 * Creates a episode<index>.json to be used for conversion by Github action for uploading to anchorFM
 * 
 * @param {object} episodeID - video ID from getVideoID
 * @param {index} index - index of video object being processed
 */

function createActionInputFile(episodeID, index) {
  // TODO:
  //  Write to episodes.json
  //  Add to convertedEpisode.json
  //  Cleanup
  const videoID = episodeID.id
  const fileName = `episode_${videoID}.json`

  fs.writeFile(fileName, JSON.stringify(episodeID), err => {
    if (err) {
      console.error("Error in writing to episode.json", err)
    }
    console.log("Episode file generated with name", fileName)
  });
  return 
}