import createActionInputFile from "./createactioninputfile.mjs"

/**
 * Gets a video ID, creates and object to be stored in a json for Github Action input  
 * 
 * @param {object} data - single video object 
 * @param {number} index - index of video object
 */

 export default function getVideoID(data, index) {
    var videoObj = {
      id: data.ID
    }
    createActionInputFile(videoObj, index)
  }
  