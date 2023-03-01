#!/bin/bash
# Purpose: Create a cronjob for the program

clear

# Path to the script to be run
SCRIPT_PATH=$(pwd)/croned.sh
# Log file path
LOG_FILE=$(pwd)/cronJob.log

# Schedule the script to run every Thursday at 12 PM UTC
(crontab -l 2>/dev/null; echo "00 12 * * 4 $SCRIPT_PATH >> $LOG_FILE 2>&1") | crontab -

# Set the PATH to crontab
# 
echo "**IMPORTANT** : Please do the following steps before proceeding"
echo
echo -e "The following line(s) SHOULD be made the first 
line of crontab file(this is to do with PATH environment variable)
"
echo "PATH="$PATH
echo 
echo -e "** == Run the following command on a terminal and paste the above line(s) there == ** \n" 
echo "crontab -e" 