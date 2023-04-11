#! /bin/bash
# Purpose: Rerun failed runs using the github cli for the specific branch

# Current branch
branch=$(git branch --show-current)

# See failed runs
# gh run list --status failure --workflow "Upload Episode from YouTube To Anchor.Fm" -b $branch

# Figure out which episodes failed
total_failures=$(gh run list --status failure --workflow "Upload Episode from YouTube To Anchor.Fm" -b $branch | wc -l)
if [[ $total_failures == 0 ]];then
    echo "All jobs ran successfully"
else
    # Rerun logic
    echo "Rerun failed jobs" 
    gh run list --status failure --workflow "Upload Episode from YouTube To Anchor.Fm" -b podcast_1 | awk '{print $15}' > failedRuns.tmp
    while read -r line
    do
        echo "Rerun failed jobs"
        echo "Job ID: $line"
        gh run rerun $line
    done < failedRuns.tmp
fi