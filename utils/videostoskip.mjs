import fs from 'node:fs'

/**
 * Function that outputs if a video has been already processed
 *
 * @param {Array} playlistIDArray All playlist video IDs
 * @returns {Array} notConverted Video IDs of not yet converted videos
 */

 export default function videosToSkip(playlistIDArray) {
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
        // This needs to be a loop over all the IDs and if it's a match or not
        var videosArray = convertedVideosObj.videos
        const convertedIDArray = videosArray.map(element => {
          return element.ID
        })
        // Check if a video is already converted
        const notConverted = playlistIDArray.filter(element => !convertedIDArray.includes(element));
        return notConverted
      }
    }catch (err) {
      console.error("Error in figuring out upload status of videos",err)
    }

  }