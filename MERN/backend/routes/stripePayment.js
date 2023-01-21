const express = require("express")
const { makePayment, getId } = require("../controllers/StripePayment")
const router = express.Router()

router.post("/stripepayment", makePayment)

// router.get("/id", getId)

module.exports = router
