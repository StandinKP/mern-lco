import React, { Fragment } from "react"
import { Link, withRouter } from "react-router-dom"
import { signout, isAuthenticated } from "../auth/helper"

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

const Navbar = ({ history }) => (
  <div>
    <div className="header-area header-transparent">
      <div className="main-header sticky-bar header-sticky">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-2 col-md-1">
              <div className="logo navbar-brand">
                <Link to="/">
                  <img src={require("../assets/img/logo/logo.png")} alt="" />
                </Link>
              </div>
            </div>

            <div className="col-xl-10 col-lg-10 col-md-11">
              <div className="menu-main d-flex align-items-center justify-content-end">
                <div className="main-menu f-right d-none d-lg-block">
                  <nav className="navbar navbar-expand-lg">
                    <ul>
                      <li>
                        <Link className="nav-link" to="/">
                          Home
                        </Link>
                      </li>
                      {isAuthenticated() && isAuthenticated().user.role === 1 && (
                        <li>
                          <Link className="nav-link" to="/admin/dashboard">
                            A. Dashboard
                          </Link>
                        </li>
                      )}

                      <li>
                        <Link className="nav-link" to="/products">
                          Products
                        </Link>
                      </li>

                      {!isAuthenticated() && (
                        <Fragment>
                          <li>
                            <Link className="nav-link" to="/signup">
                              Sign Up
                            </Link>
                          </li>
                          <li>
                            <Link className="nav-link" to="/signin">
                              Sign In
                            </Link>
                          </li>
                        </Fragment>
                      )}
                      {isAuthenticated() && (
                        <Fragment>
                          <li>
                            <Link className="nav-link" to="/cart">
                              Cart
                            </Link>
                          </li>
                          <li>
                            <span
                              className="nav-link text-warning"
                              onClick={() => {
                                signout(() => {
                                  history.push("/")
                                })
                              }}>
                              Signout
                            </span>
                          </li>
                        </Fragment>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default withRouter(Navbar)
