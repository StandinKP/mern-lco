import React, { useState, useEffect } from "react"
import Base from "../core/Base"
import { Link } from "react-router-dom"
import { getCategories, getProduct, updateProduct } from "./helper/adminapicall"
import { isAuthenticated } from "../auth/helper/index"
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

const UpdateProduct = ({ match }) => {
  const { user, token } = isAuthenticated()

  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    photo: "",
    categories: [],
    category: "",
    loading: false,
    error: "",
    createdProduct: "",
    getaRedirect: false,
    formData: "",
  })

  const {
    name,
    description,
    price,
    stock,
    categories,
    // category,
    // loading,
    // error,
    createdProduct,
    // getaRedirect,
    formData,
  } = values

  const preload = (productId) => {
    getProduct(productId).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error })
      } else {
        preloadCategories()
        setValues({
          ...values,
          name: data.name,
          description: data.description,
          price: data.price,
          category: data.category._id,
          stock: data.stock,
          formData: new FormData(),
        })
      }
    })
  }

  const preloadCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error })
      } else {
        setValues({
          categories: data,
          formData: new FormData(),
        })
      }
    })
  }

  useEffect(() => {
    preload(match.params.productId)
  }, [])

  const handleChange = (name) => (e) => {
    const value = name === "photo" ? e.target.files[0] : e.target.value
    formData.set(name, value)
    setValues({ ...values, [name]: value })
  }

  const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: createdProduct ? "" : "none" }}>
      <h4>{createdProduct} updated successfully!</h4>
    </div>
  )

  const onSubmit = (e) => {
    e.preventDefault()
    setValues({ ...values, error: "", loading: true })
    updateProduct(match.params.productId, user._id, token, formData).then(
      (data) => {
        if (data.error) {
          setValues({ ...values, error: data.error })
        } else {
          setValues({
            ...values,
            name: "",
            description: "",
            price: "",
            photo: "",
            stock: "",
            loading: false,
            createdProduct: data.name,
          })
          setTimeout(() => (window.location.href = "/admin/dashboard"), 2000)
        }
      }
    )
  }

  const createProductForm = () => (
    <form onSubmit={onSubmit}>
      <span>Post photo</span>
      <div className="form-group">
        <label className="btn btn-block btn-success">
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image"
            placeholder="choose a file"
          />
        </label>
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("name")}
          name="name"
          className="form-control"
          placeholder="Name"
          value={name}
        />
      </div>
      <div className="form-group">
        <textarea
          onChange={handleChange("description")}
          name="description"
          className="form-control"
          placeholder="Description"
          value={description}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control"
          placeholder="Price"
          value={price}
        />
      </div>
      <div className="form-group">
        <select
          onChange={handleChange("category")}
          className="form-control"
          placeholder="Category">
          <option>Select</option>
          {categories &&
            categories.map((cate, index) => (
              <option key={index} value={cate._id}>
                {cate.name}
              </option>
            ))}
        </select>
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("stock")}
          type="number"
          className="form-control"
          placeholder="Stock"
          value={stock}
        />
      </div>

      <button type="submit" className="btn btn-outline-success mb-3">
        Update Product
      </button>
    </form>
  )

  return (
    <Base
      title="Add a product here!"
      description="Welcome to product creation section"
      className="container bg-info p-4">
      <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
        Admin Home
      </Link>
      <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
          {createProductForm()}
        </div>
      </div>
    </Base>
  )
}

export default UpdateProduct
