# Automating youtube video to anchor fm audio

## TODO

- [x] Comparision script that pops converted episodes
- [x] Comparision script that pops converted episodes even when order in playlist changes
- [ ] A file that tracks already converted episodes
- [x] Script to execute push trigger for workflow on episodes
- [ ] Add conversion date to already uploaded episode object at the end of workflow run success

## How To

> For the script to run successfully it is necessary for there to be `at least one episode manually published` on Anchor.fm. The steps to publish on a brand new Anchor.fm account are different and will break the automation.

> Automation depends on the [npm package](https://www.npmjs.com/package/@fabricio-191/youtube) to fetch playlist related information.

1. `Clone` the code to your repository
2. Go to `Settings -> Secrets -> New Repository Secret`
    - Add the following one by one
        - ANCHOR_EMAIL `your email id on anchor`
        - ANCHOR_PASSWORD `your anchor account password`
3. Open `Codespaces`
4. Install dependencies
   ```
   npm install
   ```
5. Open `generateEpisodeList.mjs` and add Youtube playlist URL to variable `YT_PLAYLIST`
6. Check execute permission for the bash script `triggerRun.sh`. If not executable set it with:
    ```
    chmod u+x triggerRun.sh
    ```
7. Execute the bash script from terminal in `codespace`
   ```
   ./commitEpisode.sh
   ``` 


## Concern regarding automation of playlists

<br />

> **Warning:** There might be concerns regarding violation of Github TOS when it comes to uploading of a playlist. [Please read more here](https://github.com/Schrodinger-Hat/youtube-to-anchorfm#how-to-upload-a-youtube-playlist-to-anchorfm-using-this-script)

<!-- ### Processing a playlist

> Using an example [playlist](https://www.youtube.com/watch?v=ABbDB6xri8o&list=PLrAXtmErZgOcl7mvyfkQTHFnOGZxWtN55)

- To process all of them do as recommened [here](https://github.com/Schrodinger-Hat/youtube-to-anchorfm#how-to-upload-a-youtube-playlist-to-anchorfm-using-this-script) -->