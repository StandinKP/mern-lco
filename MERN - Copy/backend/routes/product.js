const express = require("express")
const router = express.Router()

var { getProductbyId, createProduct, getProduct, photo, updateProduct, deleteProduct, getAllProducts, getAllUniqueCategories } = require("../controllers/product")
var { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth")
var { getUserbyId } = require("../controllers/user")

//All Params
router.param("userId", getUserbyId)
router.param("productId", getProductbyId)


//Actual Routes

//Create routes
router.post("/product/create/:userId", isSignedIn, isAuthenticated, isAdmin, createProduct)

//Read routes
router.get("/product/:productId", getProduct)
router.get("/product/photo/:productId", photo)

//Update routes
router.put("/product/:productId/:userId", isSignedIn, isAuthenticated, isAdmin, updateProduct)

//Delete routes
router.delete("/product/:productId/:userId", isSignedIn, isAuthenticated, isAdmin, deleteProduct)

//Listing routes
router.get("/products", getAllProducts)

router.get("/products/categories", getAllUniqueCategories)
module.exports = router