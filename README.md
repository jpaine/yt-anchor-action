# Automating youtube video to anchor fm audio

## TODO

- [ ] Testing

## How To

> For the script to run successfully it is necessary for there to be `at least one episode manually published` on Anchor.fm. The steps to publish on a brand new Anchor.fm account are different and will break the automation.

> Automation depends on the [npm package](https://www.npmjs.com/package/@fabricio-191/youtube) to fetch playlist related information.

> The steps will be modified once finalized

1. `Clone` or `fork` the code to your repository.
2. Go to `Settings -> Secrets -> New Repository Secret`
    - Add the following one by one
        - ANCHOR_EMAIL `your email id on anchor`
        - ANCHOR_PASSWORD `your anchor account password`
3. Open a `Codespace`. [Read about Codespaces](https://docs.github.com/en/codespaces)
4. In the `Codespace` terminal. Copy and paste the following, and press Enter 
    ```
    ./triggerRun.sh
    ```
---

## Storing data of processed videos

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
- Therefore, `remove` any that fail from this file and `decrease` the count accordingly. Then run again or reset this file entirely using `emptyProcessedFile.sh`.


## Concern regarding automation of playlists


> **Warning:** There might be concerns regarding violation of Github TOS when it comes to uploading of a playlist. [Please read more here](https://github.com/Schrodinger-Hat/youtube-to-anchorfm#how-to-upload-a-youtube-playlist-to-anchorfm-using-this-script)

- At times some fields don't get populated on AnchorFM (eg. title being untitled), this is dependent on Github Action and will need manual intervention.

<!-- ### Processing a playlist

> Using an example [playlist](https://www.youtube.com/watch?v=ABbDB6xri8o&list=PLrAXtmErZgOcl7mvyfkQTHFnOGZxWtN55)

- To process all of them do as recommened [here](https://github.com/Schrodinger-Hat/youtube-to-anchorfm#how-to-upload-a-youtube-playlist-to-anchorfm-using-this-script) -->