import React, { useState, useEffect } from "react"
import Base from "../core/Base"
import { Link } from "react-router-dom"
import { getCategories, createaProduct } from "./helper/adminapicall"
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

const AddProduct = () => {
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
    category,
    loading,
    error,
    createdProduct,
    getaRedirect,
    formData,
  } = values

  const preload = () => {
    getCategories().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error })
      } else {
        setValues({ ...values, categories: data, formData: new FormData() })
        console.log(formData)
      }
    })
  }

  useEffect(() => {
    preload()
  }, [])

  const onSubmit = (event) => {
    event.preventDefault()
    setValues({ ...values, error: "", loading: true })
    createaProduct(user._id, token, formData).then((data) => {
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
    })
  }

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value
    formData.set(name, value)
    setValues({ ...values, [name]: value })
  }

  const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: createdProduct ? "" : "none" }}>
      <h4>{createdProduct} created successfully</h4>
    </div>
  )

  const createProductForm = () => (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input
          className="mt-3"
          onChange={handleChange("photo")}
          type="file"
          name="photo"
          accept="image"
          placeholder="choose a file"
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("name")}
          name="photo"
          className="form-control"
          placeholder="Name"
          value={name}
        />
      </div>
      <div className="form-group">
        <textarea
          onChange={handleChange("description")}
          name="photo"
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
          <option>Select a Category</option>
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

      <button type="submit" className="btn mb-3">
        Create Product
      </button>
    </form>
  )

  return (
    <Base
      title="Add a product here!"
      description="Welcome to product creation section"
      className="container bg-info p-4">
      <Link to="/admin/dashboard" className="btn btn-md mb-3">
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

export default AddProduct
