#!/bin/bash

# Program's directory
export YT_ACTION_PATH=$(pwd)

# Path to the script to be run
SCRIPT_PATH=$(pwd)/croned.sh

echo $SCRIPT_PATH

# Log file path
LOG_FILE=$(pwd)/logfile.log

echo $LOG_FILE

# Schedule the script to run every Thursday at 12 PM UTC
(crontab -l 2>/dev/null; echo "00 16 * * 4 $SCRIPT_PATH >> $LOG_FILE 2>&1") | crontab -
