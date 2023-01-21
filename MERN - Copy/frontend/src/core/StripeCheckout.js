import React, { useState, useEffect } from "react"
import { isAuthenticated } from "../auth/helper"
import { emptyCart, loadCart } from "./helper/cartHelper"
import { Link } from "react-router-dom"

const StripeCheckout = ({
  products,
  setReload = (f) => f,
  reload = undefined,
}) => {
  const [data, setData] = useState({
    loading: false,
    success: false,
    error: "",
    address: "",
  })

  const userId = isAuthenticated() && isAuthenticated().user._id
  const token = isAuthenticated() && isAuthenticated().token

  const getFinalAmount = () => {
    let amount = 0
    products.map((p) => {
      amount = amount + p.price
    })
    return amount
  }

  return (
    <div>
      <h4 className="text-white">Stripe</h4>
      <p className="text-white">Final Amount is: ${getFinalAmount()}</p>
    </div>
  )
}

export default StripeCheckout
