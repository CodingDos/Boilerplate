import mongoose from "mongoose"
import connection from "../connection.js"
import data from "./bookmarks.json" assert {type: "json"}
import Bookmarks from "../models/bookmarks.js"

Bookmarks.deleteMany({})
    .then(() => Bookmarks.create(data))
    .then(() => console.log("Done"))
    .then(() => mongoose.disconnect())
    .catch(error => console.log("Error", error))