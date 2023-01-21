import React, { useState, useEffect } from "react"
import Base from "./Base"
import ProductCard from "./ProductCard"
import { loadCart } from "./helper/cartHelper"
import StripeCheckout from "./StripeCheckout"
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
import smoothie from "../assets/img/gallery/smoothie1.png"
import { Link } from "react-router-dom"

const Cart = () => {
  const [products, setProducts] = useState([])
  const [reload, setReload] = useState(false)

  useEffect(() => {
    setProducts(loadCart())
  }, [reload])

  const loadAllProducts = (products) => {
    return (
      <div>
        <h2>This section is to load Cart</h2>
        {products.map((product, index) => (
          <div className="row justify-content-around">
            <div className="col">
              <div className="justify-content-center">
                <div className="card m-4" style={{ border: "none" }}>
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src={smoothie}
                        alt=""
                        style={{ height: "200px", width: "200px" }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="row">
                          <div className="col ml-7 text-left">
                            <h5 className="card-title">Smoothie</h5>
                            <p className="card-text">smoothie</p>
                          </div>
                          <div className="col-5">
                            <div>$ 25</div>

                            <button
                              className="text-center btn btn-block mt-2 mb-2"
                              style={{ width: "300px" }}>
                              Remove from Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <Base>
      <div className="text-center">
        {products.length > 0 ? loadAllProducts(products) : <h4>No products</h4>}
        <div className="text-center mb-3 ml-5">
          <Link to="/details">
            <button type="button" className="btn">
              Continue to Payment
            </button>
          </Link>
        </div>
      </div>
    </Base>
  )
}

export default Cart
