#!/bin/bash

# TODO: Fix if needed and is to be used


# Get a list of branches and store them in branches.txt
git branch --list --format='%(refname:lstrip=2)' > branches.txt

# Loop through each branch and switch to it
while read branch; do
  git switch "$branch"
  echo "Switched to branch: $branch"
  
  # Run git branch --show-current and echo hello
  echo "Current branch: $(git branch --show-current)"
  echo "Hello"
done < branches.txt

# Clean up by removing branches.txt
rm branches.txt
