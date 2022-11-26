/**
 * This module consumes a youtube playlist URL from environment variable
 * YT_PLAYLIST
 * and extracts video ids from it, to be used
 * as input for episode.json
 *
 */

import { getPlaylist } from '@fabricio-191/youtube'
import fs from 'node:fs'

// Download playlist information
// Entrypoint
downloadPlaylistJSON();


function downloadPlaylistJSON() {
  // TODO: Remove
  // episodeIterator();

  getPlaylist(process.env.YT_PLAYLIST)
    .then(data => {
      fs.writeFile('./playlist.json', JSON.stringify(data), err => {
        if (err) {
          console.error("Error in writing playlist data", err);
        }
        console.log("Playlist downloaded successfully")
        episodeIterator();
      });
    })
    .catch(console.error);
}

// 
function episodeIterator() {

  // Read the playlist file downloaded
  fs.readFile('playlist.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const playlistDataObj = JSON.parse(data);

    // Number of items in the playlist
    const videoCount = playlistDataObj.videos.length

    // Iterate over the length of playlist i.e video count in a playlist
    for (let index = 0; index < videoCount; index++) {
      // Extract video ID to be used by episode.json 
      getVideoID(playlistDataObj.videos[index])
    }
  });
}

/**
 * 
 * @param {object} data - single video object 
 */

function getVideoID(data) {
  var videoObj = {
    id:""
  }
  // console.log("Video ID", data.URL, typeof (data.URL), data.URL.slice(32))
  videoObj.id = data.URL.slice(32)
  console.log(videoObj)
}