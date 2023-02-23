#!/bin/bash

# Get a list of branches and store them in branches.txt
# git branch --list --format='%(refname:lstrip=2)' > branches.txt

# Loop through each branch and switch to it
# while read branch; do
#   git switch "$branch"
#   echo "Switched to branch: $branch"
  
#   # Run git branch --show-current and echo hello
#   echo "Current branch: $(git branch --show-current)"
#   echo "Hello"

#   # Run the program
#   .$(pwd)/hello.sh
# done < branches.txt
pwd
cd $YT_ACTION_PATH
git switch local-cron
./hello.sh
# Clean up by removing branches.txt
# rm branches.txt
