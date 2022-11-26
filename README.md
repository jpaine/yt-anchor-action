# Automating youtube video to anchor fm audio

> For the script to run successfully its necessary for there to be at least one episode manually published on Anchor.fm, as the steps to publish on a brand new Anchor.fm account are different, and the automation will break.

- Automation depends on the [npm package](https://www.npmjs.com/package/@fabricio-191/youtube) to fetch playlist related information.
    - In workflow yaml add YT_PLAYLIST environment variable to URL of youtube playlist.
      ```yaml
      env:
        YT_PLAYLIST: https://www.youtube.com/watch?v=ABbDB6xri8o&list=PLrAXtmErZgOcl7mvyfkQTHFnOGZxWtN55
      ```
- Go to `Settings -> Secrets -> New Repository Secret`
    - Add the following one by one
        - ANCHOR_EMAIL `your email id on anchor`
        - ANCHOR_PASSWORD `your anchor account password`

## Regarding Automation of Playlist

> **NOTE:** There are concerns with uploading a playlist violating Github TOS [Please read](https://github.com/Schrodinger-Hat/youtube-to-anchorfm#how-to-upload-a-youtube-playlist-to-anchorfm-using-this-script)

### Processing a playlist

> Using an example [playlist](https://www.youtube.com/watch?v=ABbDB6xri8o&list=PLrAXtmErZgOcl7mvyfkQTHFnOGZxWtN55)

- To process all of them do as recommened [here](https://github.com/Schrodinger-Hat/youtube-to-anchorfm#how-to-upload-a-youtube-playlist-to-anchorfm-using-this-script)