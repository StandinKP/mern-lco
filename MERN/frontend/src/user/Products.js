import React, { useState, useEffect } from "react"
import Base from "../core/Base"
import { getProducts } from "../admin/helper/adminapicall"
import ProductCard from "../core/ProductCard"
import { addItemToCart, removeItemFromCart } from "../core/helper/cartHelper"

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
import ImageHelper from "../core/helper/ImageHelper"
import { Redirect } from "react-router-dom"
import smoothie from "../assets/img/gallery/smoothie1.png"

const Products = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setReload = (f) => f,
  //   function(f){return f}
  reload = undefined,
}) => {
  const [products, setProducts] = useState([])
  const [redirect, setRedirect] = useState(false)

  const preload = () => {
    getProducts().then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        setProducts(data)
      }
    })
  }

  const getARedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />
    }
  }

  useEffect(() => {
    preload()
  }, [])

  const addToCart = () => {
    addItemToCart(product, () => setRedirect(true))
  }

  return (
    <Base>
      <div>
        <h2>This section is to load products</h2>
        {/* {products.map((product, index) => (
          <div className="row justify-content-around" key={index}>
            <div className="col">
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
                            <div>$ {product.price}</div>

                            <button
                              onClick={addToCart}
                              className="text-center btn btn-block mt-2 mb-2"
                              style={{ width: "200px" }}>
                              Add to Cart
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
        ))} */}
        <div className="row justify-content-around">
          <div className="col">
            <div className="justify-content-center">
              <div className="card m-4" style={{ border: "none" }}>
                <div className="row">
                  <div className="col-md-4">
                    {getARedirect(redirect)}
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
                            onClick={addToCart}
                            className="text-center btn btn-block mt-2 mb-2"
                            style={{ width: "200px" }}>
                            Add to Cart
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
        <div className="row justify-content-around">
          <div className="col">
            <div className="justify-content-center">
              <div className="card m-4" style={{ border: "none" }}>
                <div className="row">
                  <div className="col-md-4">
                    {getARedirect(redirect)}
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
                            onClick={addToCart}
                            className="text-center btn btn-block mt-2 mb-2"
                            style={{ width: "200px" }}>
                            Add to Cart
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
      </div>
    </Base>
  )
}

export default Products
