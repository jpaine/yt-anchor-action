> For the script to run successfully its necessary for there to be at least one episode manually published on Anchor.fm, as the steps to publish on a brand new Anchor.fm account are different, and the automation will break.

- Go to `Settings -> Secrets -> New Repository Secret`
    - Add the following one by one
        - ANCHOR_EMAIL `your email id on anchor`
        - ANCHOR_PASSWORD `your anchor account password`

## Regarding Automation of Playlist

> There are concerns with uploading a playlist violating Github TOS [Please read](https://github.com/Schrodinger-Hat/youtube-to-anchorfm#how-to-upload-a-youtube-playlist-to-anchorfm-using-this-script)

### Processing a playlist

> https://www.youtube.com/watch?v=ABbDB6xri8o&list=PLrAXtmErZgOcl7mvyfkQTHFnOGZxWtN55

- The entire page can be downloaded using wget and is to be processed for playlist item extraction.  
- The DOM node that contains the playlist has a classname of `playlist-items`
- Each video in the playlist is rendered in DOM node with the tag name of `ytd-playlist-panel-video-renderer`
- Under the above DOM node is a link tag, which has the `video id` that needs to be extracted to episode.json for uploading.
- To process all videos `although not recommended` as the automation might violate Github TOS, this should generate a episode.json with video ids for the entire playlist.
- To process all of them do as recommened [here](https://github.com/Schrodinger-Hat/youtube-to-anchorfm#how-to-upload-a-youtube-playlist-to-anchorfm-using-this-script)