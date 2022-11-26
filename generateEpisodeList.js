/**
 * This function consumes a youtube playlist URL
 * and extracts video ids from it, to be used
 * as input for episode.json 
 * 
 * @param {string} playlistURL - URL of playlist to be processed for upload  
 */
import * as doc from './playlist'

function generateEpisodeList(playlistURL) {

    // Download the playlist document and store it at local root
    // In this scenario no playlistURL is needed, remove it
    const document = doc
    // Store the playlist-items node, returns an HTMLCollection
    // HTMLCollection is an array-like object
    const playlistNodes = document.getElementsByClassName("playlist-items")
    // Create an array from HTMLCollection
    const playlistArray = Array.from(playlistNodes)
    
    // Total videos to process from array
    console.log("Total Videos", playlistArray.length)
    // Total videos to process from HTMLCollection
    console.log("Total nodes in HTMLCollection",playlistNodes.length)
    // Iterate over array items
    // Return an array of id
    return 0
}