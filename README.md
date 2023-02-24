# Automating youtube video to anchor fm audio

**Table of Content**
- [Automating youtube video to anchor fm audio](#automating-youtube-video-to-anchor-fm-audio)
  - [Prerequisite](#prerequisite)
  - [Setting up automation of job](#setting-up-automation-of-job)
  - [How is the converted videos data stored ?](#how-is-the-converted-videos-data-stored-)
  - [Concern regarding automation of playlists](#concern-regarding-automation-of-playlists)

## Prerequisite 

> For the script to run successfully it is necessary for there to be **at least one episode manually published** on Anchor.fm. The steps to publish on a brand new Anchor.fm account are different and will break the automation.

1. Make sure you have `node`, `npm` and `git` installed on your machine.

   ```bash
    node --version && npm --version && git --version
   ```
## Setting up automation of job

1. On [Github](github.com), sync your fork and create a new branch and name it like `podcast_1` and so on. 
2. Go to secrets and create `ANCHOR_EMAIL_1` and `ANCHOR_PASSWORD_1`. The `_x` naming format are to match branch to podcast credentials.
3. If running for first time, clone the repository to a folder in your local machine, change into the folder.
    ```bash
    git clone <url> && cd yt-anchor-action/
    ```
     1. Later addition or to update the local repository run
        ```bash
        git pull
        ```
4. Switch into a branch `git switch <branch_name>` 
    ```bash
     git switch podcast_1
    ``` 
5. To setup up a URL for this branch, to be used in all subsequent runs
    ```bash
      ./scripts/prompt-url.sh
    ```
6. To update the github action to match Anchor password and email
    ```bash
      ./scripts/update-worfklow.sh
    ```
7.  To set the job to run at a specific time and edit that time if needed.
    1.  To cron the job 
        ```bash
          ./scripts/cron-it.sh
        ``` 
    2.  At times, you would want to edit the cronjob, use `crontab -e` and edit it. [Cronguru](https://crontab.guru/) can help you in figuring out the format used in timing a job.
8. To check if the cron job is set, you can list it using
   ```bash
    crontab -l
   ```
9. The action runs every Thursday at 12 pm your machine's local time, the machine needs to be powered on at this hour.
10. Go to repository on github and under `Actions` tab of a branch you can see if the action was executed.

## How is the converted videos data stored ?

For first run the `convertedVideos.json` file should have the following keys. 

```json
{
    "name": "Upload processed data",
    "videoQuantity": 0,
    "lastUpdated": "",
    "videos": []
}
```

- The video information is stored in the key `videos` as array of _video IDs_

## Concern regarding automation of playlists

> Automation depends on the [npm package](https://www.npmjs.com/package/@fabricio-191/youtube) to fetch playlist related information without use of an API key.

> **Warning:** There might be concerns regarding violation of Github TOS when it comes to uploading of a playlist. [Read more here](https://github.com/Schrodinger-Hat/youtube-to-anchorfm#how-to-upload-a-youtube-playlist-to-anchorfm-using-this-script)

> At times some fields don't get populated on AnchorFM (eg. title being untitled), this is dependent on Github Action and will need manual intervention.

<!-- ### Processing a playlist

> Using an example [playlist](https://www.youtube.com/watch?v=ABbDB6xri8o&list=PLrAXtmErZgOcl7mvyfkQTHFnOGZxWtN55)

- To process all of them do as recommened [here](https://github.com/Schrodinger-Hat/youtube-to-anchorfm#how-to-upload-a-youtube-playlist-to-anchorfm-using-this-script) 

Push Issue
https://github.com/community/community/discussions/37103
-->
