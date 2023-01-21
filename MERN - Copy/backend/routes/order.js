const express = require("express")
const router = express.Router()

var { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth")
var { getUserbyId, pushOrderInPurchaseList } = require("../controllers/user")
const { updateStock } = require("../controllers/product")
const { getOrderbyId, createOrder, getAllOrders, getOrderStatus, updateStatus } = require("../controllers/order")

//Params
router.param("userId", getUserbyId)
router.param("orderId", getOrderbyId)

//Actual routes

//Create routes
router.post("/order/create/:userId", isSignedIn, isAuthenticated, pushOrderInPurchaseList, updateStock, createOrder)

//Read routes
router.get("/order/all/:userId", isSignedIn, isAuthenticated, isAdmin, getAllOrders)

//Status of order
router.get("/order/status/:userId", isSignedIn, isAuthenticated, isAdmin, getOrderStatus)
router.put("/order/:orderId/status/:userId", isSignedIn, isAuthenticated, isAdmin, updateStatus)
module.exports = router