import fs from 'node:fs'

/**
 * Creates a episode_<video ID>.json to be used for conversion by Github Action for uploading to anchorFM
 * 
 * @param {object} episodeID - Youtube video ID 
 */

 export default function createActionInputFile(episodeID) {
    const fileName = `episode_${episodeID}.json`
    const writeObj = {"id": episodeID}

    fs.writeFile(fileName, JSON.stringify(writeObj), err => {
      if (err) {
        console.error("Error in writing to episode.json", err)
      }
      console.log("Episode file generated with name", fileName)
    });
    return 
  }
  