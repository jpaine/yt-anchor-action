#!/bin/bash
# Purpose: Create a cronjob for the program

# Path to the script to be run
SCRIPT_PATH=$(pwd)/croned.sh

# Log file path
LOG_FILE=$(pwd)/cronJob.log

# Schedule the script to run every Thursday at 12 PM UTC
(crontab -l 2>/dev/null; echo "00 12 * * 4 $SCRIPT_PATH >> $LOG_FILE 2>&1") | crontab -
