import React, { useState } from "react"
import { Redirect, Link } from "react-router-dom"

import { signin, authenticate, isAuthenticated } from "../auth/helper/index"
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

const Signin = () => {
  const [values, setValues] = useState({
    email: "xxx@d.com",
    password: "xxx",
    error: "",
    loading: false,
    didRedirect: false,
  })

  const { email, password, error, loading, didRedirect } = values
  const { user } = isAuthenticated()

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setValues({ ...values, error: false, loading: true })
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false })
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            })
          })
        }
      })
      .catch(console.log("signin request failed"))
  }

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />
      } else {
        return <Redirect to="/" />
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />
    }
  }

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
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

  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-dark">Email</label>
              <input
                onChange={handleChange("email")}
                value={email}
                className="form-control"
                type="email"
              />
            </div>

            <div className="form-group">
              <label className="text-dark">Password</label>
              <input
                onChange={handleChange("password")}
                value={password}
                className="form-control"
                type="password"
              />
            </div>
            <button onClick={onSubmit} className="btn btn-success btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="text-center mt-5 justify-content-center">
      {loadingMessage()}
      {errorMessage()}
      <div className="text-center">
        <div className="logo mr-5 navbar-brand">
          <Link to="/">
            <img
              src={require("../assets/img/logo/logo.png")}
              alt=""
              style={{ marginBottom: "25px", marginLeft: "200px" }}
            />
          </Link>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-5 offset-sm-4 text-left">
          <form>
            <div>
              <h3>Login Here!</h3>
            </div>

            <div className="form-group">
              <label className="text-dark">Email</label>
              <input
                onChange={handleChange("email")}
                value={email}
                className="form-control"
                type="email"
              />
            </div>

            <div className="form-group">
              <label className="text-dark">Password</label>
              <input
                onChange={handleChange("password")}
                value={password}
                className="form-control"
                type="password"
              />
            </div>
            <button onClick={onSubmit} className="btn btn-block">
              Login
            </button>
          </form>
          <div className="text-small mt-2">
            <Link to="signup" className="nav-link text-dark">
              <span style={{ textDecoration: "underline" }}>
                Create your account here.
              </span>
            </Link>
          </div>
        </div>
      </div>

      {performRedirect()}
    </div>
  )
}

export default Signin
