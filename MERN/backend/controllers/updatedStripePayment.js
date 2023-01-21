const stripe = require("stripe")(
  "sk_test_51H1ok3CqcKBw4fHWYH4DxBKcnyBssm4BODrMIj0EHoNWFqwj9HXrDUdnB4dOzDDmdDnybXFpgnONfc9JWe1hPQNb00kplXRhbg"
)
const uuid = require("uuid/v4")

exports.getId = async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card", "ideal"],
    line_items: [
      {
        price_data: {
          currency: "inr",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
        mode: "payment",
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000/home",
    cancel_url: "http://localhost:3000/cart",
  })
  return res.status(200).json({ session_id: session.id })
}

exports.makePayment = (req, res) => {
  //
}
