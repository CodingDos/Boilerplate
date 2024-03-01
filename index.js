import express from "express"
import connection from "./connection.js"
import Bookmark from "./models/bookmarks.js"


let app = express()

app.get('/', (req, res) => {
    Bookmark.find({})
        .then(bookmarks => res.json(bookmarks))
})


app.listen(3222, () => {
    console.log("we rollin")
})