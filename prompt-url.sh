#!/bin/bash

# Author: Mandar Devarshi
# Github: @MandarDevarshi
# CreatedDate: Thu 29 Dec 14:59:57 IST 2022
# Purpose: Helper Script
# For debugging uncomment the following line
# set -x

# Clear terminal
clear 

# Set the terminal to xterm-256color
export TERM=xterm-256color

# Set the background color to blue and the foreground color to white
tput setab 4
tput setaf 7

# Display a heading
echo -e "----- YouTube to AnchorFM Utility ----- \n"

# Loop until a valid URL is provided
while true; do
  # Ask the user for a URL
  echo "Paste your Youtube Playlist URL"
  tput sgr0
  echo "example. https://www.youtube.com/watch?v=nKU7iz9RYV0&list=OLAK5uy_kEqS_tSoax6m3cFM1KMje9I3QYErYu7Zo     "
  echo
  read -p "URL: " URL

  
  # Check if the URL is valid
  if [[ $URL =~ ^https?://.+$ ]]; then
    # Valid URL, so print it and exit the loop
    # echo "The URL is: $url"
    break
  else
    # Invalid URL, so display an error message and loop again
    echo "Invalid URL. Please enter a valid URL starting with 'http://' or 'https://'"
  fi
done

# Reset the colors to their default values
tput sgr0
# # Print a message with the new colors
# echo "This text has a blue background and white foreground!"