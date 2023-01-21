const express = require("express")
const router = express.Router()

const {
  getCategorybyId,
  createCategory,
  getCategory,
  getAllCategories,
  updateCategory,
  removeCategory,
} = require("../controllers/category")
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth")
const { getUserbyId } = require("../controllers/user")

//params
router.param("userId", getUserbyId)
router.param("categoryId", getCategorybyId)

//actual routes

//Create
router.post(
  "/category/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createCategory
)

//Read
router.get("/category/:categoryId", getCategory)
router.get("/categories", getAllCategories)

//Update
router.put(
  "/category/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateCategory
)

//Delete
router.delete(
  "/category/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  removeCategory
)
module.exports = router
