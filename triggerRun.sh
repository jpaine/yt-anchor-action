#! /bin/bash

# To download and generate episodes to be uploaded
node generateEpisodeList.mjs

TOTAL_EPISODES=$(ls | grep episode | wc -l)

echo 
echo '==================================================='
echo "=       Triggering push for Github action         ="
echo '==================================================='
echo 
echo Total episode to convert and upload: ${TOTAL_EPISODES}

for i in $(ls | grep episode); do
    # echo "file to commit: " $i
    COMMIT_MESSAGE="Trigger uploading of $i"
    echo ${COMMIT_MESSAGE} 
    # Rename to episode.json
    mv $i episode.json
    # ls | grep episode 
    # Stage file for commit
    git add episode.json
    # Commit
    git commit -m ${COMMIT_MESSAGE}
    # Push to trigger
    git push
done
