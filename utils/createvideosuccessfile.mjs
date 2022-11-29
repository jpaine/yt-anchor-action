import editJsonFile from "edit-json-file"

/**
 * Saves successfully processed video's data to a file
 * 
 * @param {Object} videoObj Contains information about the video from playlist 
 * @returns 
 */
// TODO: Implement
export default function createVideoSuccessFile(videoObj){
    const successVideoFile = editJsonFile('./convertedVideos.json')

    // Create a new object
    // console.log(videoObj)
    // Add +1 to videoQuantity on success
    // Push the object in the videos array
    try{
        successVideoFile.append("videos",videoObj)
        successVideoFile.save()
    }catch(err){
        console.log("Error in writing to already processed JSON file")
    }finally{
        var videosConverted = successVideoFile.get("videoQuantity")
        videosConverted = videosConverted + 1
        successVideoFile.set("videoQuantity", videosConverted)
        successVideoFile.set("lastUpdated", new Date())
        successVideoFile.save()
        // console.log("Adding 1 success to converted", successVideoFile.get("videoQuantity"))
        return 
    }

}