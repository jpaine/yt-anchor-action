#! /bin/bash

# URL for the Branch
# Please set it up before making it into a cron
# On subsequent runs it will take the url from branch_playlist.txt
source ./scripts/prompt-url.sh

# The URL is read from repository variable and passed from scheduled workflow
echo -e "\nProcessing: " $URL

# Sync with the latest convertedVideos.json file
git checkout origin/$(git branch --show-current) -- convertedVideos.json

# To download and generate episodes to be uploaded
node generateEpisodeList.mjs $URL

echo
echo "=======           Commit Changes to Processed Videos                        ======\n"
echo " Note: To reset in case of failure use emptyProcessedFile script and commit manually"
echo '===================================================================================='
git add -f convertedVideos.json
git commit -m "workflow-run: Videos processed"
git push

TOTAL_EPISODES=$(ls | grep episode | wc -l)
TOTAL_EPISODES=$((TOTAL_EPISODES-1))

echo 
echo '==================================================='
echo "=       Triggering push for Github action         ="
echo '==================================================='
echo 
echo Total episode to convert and upload: ${TOTAL_EPISODES}

for i in $(ls | grep episode_); do
    cat $i
    # Rename to episode.json
    mv $i episode.json
    # Stage file for commit
    git add -f episode.json
    # Commit
    git commit -m 'workflow-run: Uploading Episode to AnchorFM'
    # Push to trigger
    git push
    # Empty the episode file
    echo {\"id\":\"\"} > episode.json
done

