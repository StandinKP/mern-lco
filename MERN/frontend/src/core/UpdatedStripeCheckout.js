import React from "react"
import ReactDOM from "react-dom"
import { loadStripe } from "@stripe/stripe-js"
import { API } from "../backend"

const stripePromise = loadStripe(
  "pk_test_51H1ok3CqcKBw4fHWJizjV5ma68BQZfK0wGpWcEbu8gSIBHKiz1OQJC2mxwkSxaspXnKs5zCK8JWkiD6fl9MoYtoz00uQaj0CzL"
)

function UpdatedStripeCheckout() {
  var response = fetch(`${API}/id`)
    .then(function (response) {
      return response.json()
    })
    .then(function (responseJson) {
      var sessionID = responseJson.session_id
      // Call stripe.redirectToCheckout() with the Session ID.
    })

  const handleClick = async (event) => {
    // Call your backend to create the Checkout Session—see previous step
    const { sessionId } = await response
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    })
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  }

  return (
    <div>
      <button className="btn text-white mb-4" role="link" onClick={handleClick}>
        Checkout
      </button>
    </div>
  )
}

export default UpdatedStripeCheckout
