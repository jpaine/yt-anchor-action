#!/bin/bash

# Program's directory
PATH=$(pwd)

# Path to the script to be run
SCRIPT_PATH=$PATH/croned.sh

echo $SCRIPT_PATH

# Log file path
LOG_FILE=$PATH/logfile.log

echo $LOG_FILE

# Schedule the script to run every Thursday at 12 PM UTC
(crontab -l 2>/dev/null; echo "20 15 * * 4 $SCRIPT_PATH $PATH >> $LOG_FILE 2>&1") | crontab -
