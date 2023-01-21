const express = require("express");
const router = express.Router();

var { isSignedIn, isAuthenticated } = require("../controllers/auth");
var { getToken, processPayment } = require("../controllers/paymentPaypal");
const { getUserbyId } = require("../controllers/user");

router.param("userId", getUserbyId);

router.get("/payment/gettoken/:userId", isSignedIn, isAuthenticated, getToken);

router.post(
  "/payment/braintree/:userId",
  isSignedIn,
  isAuthenticated,
  processPayment
);

module.exports = router;
