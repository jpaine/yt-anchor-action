> For the script to run successfully its necessary for there to be at least one episode manually published on Anchor.fm, as the steps to publish on a brand new Anchor.fm account are different, and the automation will break.

- Go to `Settings -> Secrets -> New Repository Secret`
    - Add the following one by one
        - ANCHOR_EMAIL `your email id on anchor`
        - ANCHOR_PASSWORD `your anchor account password`

> There are concerns with uploading a playlist violating Github TOS [Please Read](https://github.com/Schrodinger-Hat/youtube-to-anchorfm#how-to-upload-a-youtube-playlist-to-anchorfm-using-this-script)