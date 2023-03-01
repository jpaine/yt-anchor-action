#!/bin/bash

# Author: Mandar Devarshi
# Github: @MandarDevarshi
# CreatedDate: Thu 29 Dec 14:59:57 IST 2022
# Purpose: Helper Script
# For debugging uncomment the following line
# set -x

# Clear terminal
clear 

# Display a heading
echo -e "----- YouTube to AnchorFM Utility ----- \n"

# The text file where playlist url for this branch is stored
PLAYLIST_FILE="branch_playlist.txt"

# Check if the playlist file exists and contains a valid URL
if [ -f "$PLAYLIST_FILE" ] && [[ $(cat "$PLAYLIST_FILE") =~ ^https?://.+ ]]; then
  # Use the existing URL
  URL=$(cat "$PLAYLIST_FILE")
  echo "Using existing URL: $URL"
else
  # Loop until a valid URL is provided
  while true; do
    # Ask the user for a URL
    echo "Installing Dependencies"
    npm install
    echo "Paste your Youtube Playlist URL"
    echo "example. https://www.youtube.com/watch?v=nKU7iz9RYV0&list=OLAK5uy_kEqS_tSoax6m3cFM1KMje9I3QYErYu7Zo"
    echo
    read -p "URL: " URL

    # Check if the URL is valid
    if [[ $URL =~ ^https?://.+$ ]]; then
      # Valid URL
      # Save the URL for branch
      echo $URL > "$PLAYLIST_FILE"
      break
    else
      # Invalid URL, so display an error message and loop again
      echo "Invalid URL. Please enter a valid URL starting with 'http://' or 'https://'"
    fi
  done
fi

# Use the URL for further processing
# echo "Processing URL: $URL"
echo -e "\n -=> If you wish to change the Playlist URL, first delete branch_playlist.txt and run the program again\n"