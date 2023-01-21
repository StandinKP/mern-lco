const express = require("express")
const router = express.Router()
const fileUpload = require("express-fileupload")
var { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth")
const { uploadFile } = require("../controllers/upload")

router.post("/upload", isSignedIn, isAuthenticated, isAdmin, uploadFile)

module.exports = router
