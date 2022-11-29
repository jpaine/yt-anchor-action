import fs from 'node:fs'

/**
 * Function that outputs if a video has been already processed
 *
 * @param {Number} index Index of current playlist video object being processed
 * @param {Array} playlistIDArray All playlist video IDs
 * @returns {boolean} If video already converted return true, else false
 */

 export default function videosToSkip(index, playlistIDArray) {
    var convertedVideoID
    try {
      // Read the file that stores converted videos objects
      const convertedVideosObj = JSON.parse(fs.readFileSync('convertedVideos.json', 'utf8'));

      // If none have been converted till now
      if(convertedVideosObj.videoQuantity === 0 ){
        console.log("No videos uploaded to anchor FM yet")
        console.log("========== First Run ==============")
        return false
      }else{
      // If playlist video count exceeds already converted count
      if (index >= convertedVideosObj.videos.length) {
        return false
      } else {
        convertedVideoID = convertedVideosObj.videos[index].ID
        // Check if a video is already converted
        const toSkip = playlistIDArray.includes(convertedVideoID)
        return toSkip
      }
    }
    } catch (err) {
      console.error("Error in figuring out upload status of videos",err)
    }

  }