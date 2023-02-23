#!/bin/bash

# Path to the script to be run
SCRIPT_PATH=$(pwd)/triggerRun.sh

echo $SCRIPT_PATH

# Log file path
LOG_FILE=$(pwd)/logfile.log

echo $LOG_FILE

# Schedule the script to run every Thursday at 12 PM UTC
(crontab -l 2>/dev/null; echo "25 2 * * 4 $SCRIPT_PATH >> $LOG_FILE") | crontab -

# # Check if the script was already run today
# if grep -q $(date +%F) "$LOG_FILE"; then
#     echo "Script already run today. Exiting."
#     exit
# fi

# Run the script and log its output
echo "Running script..."
# $SCRIPT_PATH >> $LOG_FILE 2>&1
echo "Script run complete."
