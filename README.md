# Automating youtube video to anchor fm audio

## TODO

- [ ] Testing
- [x] Refactored
- [x] A file that tracks already converted episodes.
- [x] Manual testing of above done filename: See `convertedVideos.json`
- [x] Workflow job that executes after each successful upload
- [x] Add conversion date and other relevant keys to `convertedVideos.json` at end of workflow run success. Will be helpful in tracking changes.
- [x] Comparision script that pops converted episodes
- [x] Comparision script that pops converted episodes even when order in playlist changes
- [x] Script to execute push trigger for workflow on episodes

## How To

> For the script to run successfully it is necessary for there to be `at least one episode manually published` on Anchor.fm. The steps to publish on a brand new Anchor.fm account are different and will break the automation.

> Automation depends on the [npm package](https://www.npmjs.com/package/@fabricio-191/youtube) to fetch playlist related information.

> The steps will be modified once finalized

**One Time Setup**

1. `Clone` or `fork` the code to your repository.
2. Go to `Settings -> Secrets -> New Repository Secret`
    - Add the following one by one
        - ANCHOR_EMAIL `your email id on anchor`
        - ANCHOR_PASSWORD `your anchor account password`
2. Open a `Codespace`. [Read About Codespaces](https://docs.github.com/en/codespaces)
3. In codespace open a `terminal` and install dependencies
   ```
   npm install
   ```
4. When in `codespace`. Open `generateEpisodeList.mjs` and add the Youtube playlist URL to variable `YT_PLAYLIST`

---

**For Each Run**

1. Check execute permission for the bash script `triggerRun.sh`. If not executable set it with:
    ```
    chmod u+x triggerRun.sh
    ```
2. Execute the bash script from terminal in `codespace`
   ```
   ./triggerRun.sh
   ``` 
3. Go to Actions tab in your repository to see status of each video being processed.

## Storing data of processed videos

For first run the `convertedVideos.json` file should have the following keys. 
- The video information is stored in the key `videos` as array of objects.
- This file is used to decide if videos are already processed and are to be skipped, irrespective of workflow success.
- Therefore, `remove` any that fail from this file and `decrease` the count accordingly. Then Run again.

```json
{
    "name": "Upload processed data",
    "videoQuantity": 0,
    "lastUpdated": "",
    "videos": []
}
```

## Concern regarding automation of playlists

<br />

> **Warning:** There might be concerns regarding violation of Github TOS when it comes to uploading of a playlist. [Please read more here](https://github.com/Schrodinger-Hat/youtube-to-anchorfm#how-to-upload-a-youtube-playlist-to-anchorfm-using-this-script)

<!-- ### Processing a playlist

> Using an example [playlist](https://www.youtube.com/watch?v=ABbDB6xri8o&list=PLrAXtmErZgOcl7mvyfkQTHFnOGZxWtN55)

- To process all of them do as recommened [here](https://github.com/Schrodinger-Hat/youtube-to-anchorfm#how-to-upload-a-youtube-playlist-to-anchorfm-using-this-script) -->