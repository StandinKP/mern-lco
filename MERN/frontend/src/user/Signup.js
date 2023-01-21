import React, { useState } from "react"
import { Link } from "react-router-dom"
import { signup } from "../auth/helper"

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

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  })

  const { name, email, password, error, success } = values

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setValues({ ...values, error: false })
    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false })
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          })
        }
      })
      .catch(console.log("Error in signup"))
  }

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}>
            New account was created successfully. Please
            <Link className="text-dark" to="/signin">
              {" "}
              Login Here
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}>
            {error}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="text-center mt-5 justify-content-center">
      {successMessage()}
      {errorMessage()}
      <div className="text-center">
        <div className="logo navbar-brand">
          <Link to="/">
            <img
              src={require("../assets/img/logo/logo.png")}
              alt=""
              style={{ marginBottom: "25px", marginLeft: "200px" }}
            />
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5 offset-sm-4 text-left">
          <form>
            <div>
              <h3 className="mb-3">Sign Up Now!</h3>
            </div>

            <div className="form-group">
              <label className="text-dark">Name</label>
              <input
                className="form-control"
                onChange={handleChange("name")}
                type="text"
                value={name}
              />
            </div>
            <div className="form-group">
              <label className="text-dark">Email</label>
              <input
                className="form-control"
                onChange={handleChange("email")}
                type="email"
                value={email}
              />
            </div>

            <div className="form-group">
              <label className="text-dark">Password</label>
              <input
                onChange={handleChange("password")}
                className="form-control"
                type="password"
                value={password}
              />
            </div>
            <button onClick={onSubmit} className="btn btn-block">
              Sign Up
            </button>
          </form>
          <div className="mt-2">
            Already have an account?
            <Link to="/signin" className="text-dark">
              <span style={{ textDecoration: "underline" }}> Login here.</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
