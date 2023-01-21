import React, { useState } from "react"
import ImageHelper from "./helper/ImageHelper"
import { Redirect } from "react-router-dom"
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper"
import "../assets/css/bootstrap.min.css"
import "../assets/css/slicknav.css"
import "../assets/css/flaticon.css"
import "../assets/css/gijgo.css"
import "../assets/css/animate.min.css"
import "../assets/css/magnific-popup.css"
import "../assets/css/fontawesome-all.min.css"
import "../assets/css/themify-icons.css"
import "../assets/css/slick.css"
import "../assets/css/nice-select.css"
import "../assets/css/style.css"

const ProductCard = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setReload = (f) => f,
  reload = undefined,
}) => {
  const [redirect, setRedirect] = useState(false)

  const addToCart = () => {
    addItemToCart(product, () => setRedirect(true))
  }

  const getARedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />
    }
  }

  const showAddToCart = (addtoCart) => {
    return (
      addtoCart && (
        <button
          onClick={addToCart}
          className="text-center btn btn-block mt-2 mb-2"
          style={{ width: "200px" }}>
          Add to Cart
        </button>
      )
    )
  }

  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id)
            setReload(!reload)
          }}
          className="btn btn-block mt-2 mb-2">
          Remove from cart
        </button>
      )
    )
  }
  return (
    <div className="justify-content-center">
      <div className="card m-4" style={{ border: "none" }}>
        <div className="row">
          <div className="col-md-4">
            {getARedirect(redirect)}
            <ImageHelper product={product} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="row">
                <div className="col ml-7 text-left">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                </div>
                <div className="col-5">
                  $ {product.price}
                  {showAddToCart(addtoCart)}
                  {showRemoveFromCart(removeFromCart)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
