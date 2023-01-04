# Automating youtube video to anchor fm audio

**Table of Content**
- [Automating youtube video to anchor fm audio](#automating-youtube-video-to-anchor-fm-audio)
  - [Prerequisite](#prerequisite)
  - [How To](#how-to)
    - [Needed to be done once for setup](#needed-to-be-done-once-for-setup)
    - [For each run](#for-each-run)
  - [How is the converted videos data stored ?](#how-is-the-converted-videos-data-stored-)
  - [Concern regarding automation of playlists](#concern-regarding-automation-of-playlists)


## Prerequisite 

> For the script to run successfully it is necessary for there to be **at least one episode manually published** on Anchor.fm. The steps to publish on a brand new Anchor.fm account are different and will break the automation.

## How To

### Needed to be done once for setup

1. `Clone` or `fork` the code to your repository.
2. Go to `Settings -> Secrets -> New Repository Secret`
    - Add the following one by one
        - ANCHOR_EMAIL `your email id on anchor`
        - ANCHOR_PASSWORD `your anchor account password`

### For each run 

1. Open a `Codespace` named `` on the `main` branch by clicking on **<> Code** dropdown at _top-right corner_. It will take a few minutes to start. If you already have a `Codespace` on it then just open the same.
2. In the `Codespace` terminal. Copy and paste the following, and press Enter 
    ```
    ./triggerRun.sh
    ```
---
---

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

- The video information is stored in the key `videos` as array of objects.
- This file is used to decide if videos are already processed and are to be skipped, irrespective of workflow success.
- **To reset** this file entirely in case of failure. Open `Codespace` and in `terminal` run the following. 
    ```
     ./emptyProcessedFile.sh
    ```

## Concern regarding automation of playlists

> Automation depends on the [npm package](https://www.npmjs.com/package/@fabricio-191/youtube) to fetch playlist related information.

> **Warning:** There might be concerns regarding violation of Github TOS when it comes to uploading of a playlist. [Read more here](https://github.com/Schrodinger-Hat/youtube-to-anchorfm#how-to-upload-a-youtube-playlist-to-anchorfm-using-this-script)

> At times some fields don't get populated on AnchorFM (eg. title being untitled), this is dependent on Github Action and will need manual intervention.

<!-- ### Processing a playlist

> Using an example [playlist](https://www.youtube.com/watch?v=ABbDB6xri8o&list=PLrAXtmErZgOcl7mvyfkQTHFnOGZxWtN55)

- To process all of them do as recommened [here](https://github.com/Schrodinger-Hat/youtube-to-anchorfm#how-to-upload-a-youtube-playlist-to-anchorfm-using-this-script) -->
