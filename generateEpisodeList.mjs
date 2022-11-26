/**
 * This function consumes a youtube playlist URL
 * and extracts video ids from it, to be used
 * as input for episode.json 
 * 
 * @param {string} playlistURL - URL of playlist to be processed for upload  
 */
// import * as doc from "playlist.html"
// const doc = requires("./playlist.html")
import fs from "node:fs"
export default function generateEpisodeList(playlistURL) {
    console.log("Generating Episode IDs")
    // Download the playlist document and store it at local root
    // In this scenario no playlistURL is needed, remove it
    const document = fs.readFile("./playlist.html")
    // Store the playlist-items node, returns an HTMLCollection
    // HTMLCollection is an array-like object
    const playlistNodes = document.getElementsByClassName("playlist-items")
    // Create an array from HTMLCollection
    const playlistArray = Array.from(playlistNodes)

    fs.writeFile("./playlistArray.txt", playlistArray)
    // Total videos to process from array
    console.log("Total Videos", playlistArray.length)
    // Total videos to process from HTMLCollection
    console.log("Total nodes in HTMLCollection",playlistNodes.length)
    // Iterate over array items
    // Return an array of id
    // return 0
}