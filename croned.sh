#!/bin/bash
# Purpose: To loop over branches named podcast_x 
# Remember: The email and password should match `_x` 

# set program directory
YT_ACTION_PATH=$(dirname $0) 
cd $YT_ACTION_PATH

# List branches and store them in branches.txt
# Remember only brances of podcast_x will be stored
git branch --list --format='%(refname:lstrip=2)' | grep '^podcast_' > branches.txt

echo $(date) >> cronJob.log

# git config --list

# Loop through each branch and switch to it
while read branch; do
  # switch to branch
  git switch "$branch"
  echo "Switched to branch: $branch"
  git status
  # Run the program
  # ./hello.sh
done < branches.txt