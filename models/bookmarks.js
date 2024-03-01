import mongoose from "mongoose"

let bookmarkSchema = new mongoose.Schema({
    title: {type: String, trim: true},
    url: {type: String, trim: true}
})


export default mongoose.model("bookmarks", bookmarkSchema)