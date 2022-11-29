#! /bin/bash

# To download and generate episodes to be uploaded
node generateEpisodeList.mjs

TOTAL_EPISODES=$(ls | grep episode | wc -l)

echo
echo "======= Commit Changes to Processed Videos ================"
echo " Note: To reset in case of failure \n use emptyProcessedFile script and commit manually"
git add -f convertedVideos.json
git commit -m "Videos processed by the run"
git push

echo 
echo '==================================================='
echo "=       Triggering push for Github action         ="
echo '==================================================='
echo 
echo Total episode to convert and upload: ${TOTAL_EPISODES}

for i in $(ls | grep episode); do
    # Rename to episode.json
    mv $i episode.json
    # Stage file for commit
    git add -f episode.json
    # Commit
    git commit -m 'Uploading Episode to AnchorFM'
    # Push to trigger
    git push
done
