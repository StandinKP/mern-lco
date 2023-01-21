import React, { useState, useEffect } from "react"
import Base from "../core/Base"
import { Link } from "react-router-dom"
import { isAuthenticated } from "../auth/helper"
import { getCategory, updateCategory } from "./helper/adminapicall"
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

const UpdateCategory = ({ match }) => {
  const { user, token } = isAuthenticated()

  const [values, setValues] = useState({
    name: "",
    loading: false,
    error: "",
    createdCategory: "",
    getARedirect: false,
  })
  const { name, error, createdCategory } = values

  const preload = (categoryId) => {
    getCategory(categoryId).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error })
      } else {
        setValues({ ...values, name: data.name })
      }
    })
  }

  useEffect(() => {
    preload(match.params.categoryId)
  }, [])

  const handleChange = (name) => (e) => {
    const value = e.target.value
    setValues({ ...values, [name]: value })
  }

  const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: createdCategory ? "" : "none" }}>
      <h4>{createdCategory} updated successfully!</h4>
    </div>
  )

  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger mt-3"
        style={{ display: error ? "" : "none" }}>
        <h4>Couldn't update category!</h4>
      </div>
    )
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setValues({ ...values, error: "", loading: true, createdCategory: name })
    updateCategory(
      match.params.categoryId,
      user._id,
      token,
      createdCategory
    ).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error })
      } else {
        setValues({
          ...values,
          name: "",
          loading: false,
          createdCategory: data.name,
          getARedirect: true,
        })
        setTimeout(() => (window.location.href = "/admin/dashboard"), 2000)
      }
    })
  }

  const createCategoryForm = () => (
    <form onSubmit={onSubmit}>
      <div className="form-group col-5 text-left">
        <p className="lead text-dark ml-3">Enter the new category name:</p>
        <input
          type="text"
          className="form-control m-3"
          onChange={handleChange("name")}
          name="name"
          value={name}
          autoFocus
          required
          placeholder="For eg. Summer"
        />
        <button type="submit" className="btn m-3">
          Update Category
        </button>
      </div>
    </form>
  )

  return (
    <Base>
      <div className="text-left ml-5">
        <Link
          to="/admin/categories"
          className="btn btn-md mb-3"
          style={{ marginLeft: "210px" }}>
          Back
        </Link>
      </div>
      <div className="row bg-light text-white rounded">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
          {errorMessage()}
          {createCategoryForm()}
        </div>
      </div>
    </Base>
  )
}

export default UpdateCategory
