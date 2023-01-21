import React, { useState, useEffect } from "react"
import Base from "../core/Base"
import { Link } from "react-router-dom"
import { isAuthenticated } from "../auth/helper"
import { getCategory, updateCategory } from "./helper/adminapicall"

const UpdateCategory = ({ match }) => {
  const { user, token } = isAuthenticated()

  const [values, setValues] = useState({
    name: "",
    loading: false,
    error: "",
    createdCategory: "",
    getARedirect: false,
  })
  const { name, loading, error, createdCategory, getARedirect } = values

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
  })

  const handleChange = (name) => (e) => {
    const value = e.target.value
    setValues({ ...values, [name]: value })
  }

  const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: createdCategory ? "" : "none" }}
    >
      <h4>{createdCategory} updated successfully!</h4>
    </div>
  )

  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger mt-3"
        style={{ display: error ? "" : "none" }}
      >
        <h4>Couldn't update category!</h4>
      </div>
    )
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setValues({ ...values, error: "", loading: true })
    updateCategory(match.params.categoryId, user._id, token, name).then(
      (data) => {
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
      }
    )
  }

  const createCategoryForm = () => (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <p className="lead text-dark">Enter the category name:</p>
        <input
          type="text"
          className="form-control my-3"
          onChange={handleChange("name")}
          name="name"
          value={name}
          autoFocus
          required
          placeholder="For eg. Summer"
        />
        <button type="submit" className="btn btn-outline-info">
          Update Category
        </button>
      </div>
    </form>
  )

  return (
    <Base
      title="Add a category here!!"
      description="Category creation section"
      className="container bg-info p-4"
    >
      <Link to="/admin/categories" className="btn btn-md btn-light mb-3">
        Back
      </Link>
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
