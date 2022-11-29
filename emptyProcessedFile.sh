#! /bin/bash
# Use the script to reset convertedVideos.json
# Useful in case of failed runs etc
echo '{
    "name": "Upload processed data",
    "videoQuantity": 0,
    "lastUpdated": "",
    "videos": []
}' > convertedVideos.json