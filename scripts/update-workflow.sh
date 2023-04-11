#!/bin/bash
# Author: Mandar Devarshi
# Github: @MandarDevarshi
# CreatedDate: Thu 23 Feb 2023 11:20:34 AM IST
# Purpose: Helper Script to change password and email in upload action
# For debugging uncomment the following line
# set -x

# Get the current branch name
branch_name=$(git branch --show-current)
# Replace in place the branch name
sed -i "s/local-cron/$branch_name/g" .github/workflows/upload-episode.yml

# Check if the patterns have already been changed
if grep -q "secrets.ANCHOR_EMAIL_${branch_name#podcast_}" .github/workflows/upload-episode.yml && grep -q "secrets.ANCHOR_PASSWORD_${branch_name#podcast_}" .github/workflows/upload-episode.yml; then
  echo "Email and Password match the branch name. Proceeding..."
else
  # Replace ANCHOR_EMAIL and ANCHOR_PASSWORD in workflow with ANCHOR_EMAIL_X and ANCHOR_PASSWORD_X
  sed -i "s/secrets.ANCHOR_EMAIL/secrets.ANCHOR_EMAIL_${branch_name#podcast_}/g" .github/workflows/upload-episode.yml
  sed -i "s/secrets.ANCHOR_PASSWORD/secrets.ANCHOR_PASSWORD_${branch_name#podcast_}/g" .github/workflows/upload-episode.yml


  # Commit and update the workflow file before proceeding further
  git add -f .github/workflows/upload-episode.yml
  git commit -m "workflow: updated to match branch's podcast"
  git push
fi