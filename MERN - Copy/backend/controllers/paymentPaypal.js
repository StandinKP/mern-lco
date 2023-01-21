var braintree = require("braintree")

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "bnhnww2953pzcw8c",
  publicKey: "wcmw4wc9m972kdb6",
  privateKey: "6747e921686ca65956045a1b0a228c6a",
})

exports.getToken = (req, res) => {
  gateway.clientToken.generate({}, function (err, response) {
    if (err) {
      return res.status(500).send(err)
    } else {
      res.send(response)
    }
  })
}

exports.processPayment = (req, res) => {
  let nonceFromTheClient = req.body.paymentMethodNonce

  let amountFromTheClient = req.body.amount
  gateway.transaction.sale(
    {
      amount: amountFromTheClient,
      paymentMethodNonce: nonceFromTheClient,
      options: {
        submitForSettlement: true,
      },
    },
    (err, result) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(result)
      }
    }
  )
}
