const stripe = require("stripe")(
  "sk_test_51H1ok3CqcKBw4fHWVG31t96oVGIJ3iW78THO0wWGrFjoCLmzMnulH4gESj8DjholGPyH1mYW2gBGsFNSpNnipTfu00p6sbRAB2"
)
const uuid = require("uuid/v4")

exports.makePayment = (req, res) => {
  const { products, token } = req.body
  console.log("PRODUCTS:", products)

  let amount = 0
  products.map((p) => {
    amount = amount + p.price
  })

  const idempotencyKey = uuid()

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges
        .create(
          {
            amount: amount * 100,
            currency: "inr",
            customer: customer.id,
            receipt_email: token.email,
            shipping: {
              name: token.card.name,
              address: {
                line1: token.card.address_line1,
                line2: token.card.address_line2,
                city: token.card.address_city,
                state: token.card.address_state,
                country: token.card.address_country,
                zipcode: token.card.address_postal_code,
              },
            },
          },
          { idempotencyKey }
        )
        .then((result) => res.status(200).json(result))
        .catch((err) => console.log(err))
    })
    .catch((err) => {})
}
