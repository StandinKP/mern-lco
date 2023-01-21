import React from "react"
import Base from "../core/Base"
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
import { Link } from "react-router-dom"

function ManagePages() {
  return (
    <Base>
      <div className="row justify-content-center">
        <div className="col-5">
          <div className="card mt-3 ml-5 mr-5 mb-5">
            <h4 className="card-header bg-dark text-white">
              Manage All Pages:
            </h4>
            <ul className="list-group">
              <li className="list-group-item">
                <Link
                  to="/admin/managepages/homepage"
                  className="nav-link text-success">
                  Home Page
                </Link>
              </li>
              <li className="list-group-item">
                <Link
                  to="/admin/managepages/featuredproducts"
                  className="nav-link text-success">
                  Featured Products
                </Link>
              </li>
              <li className="list-group-item">
                <Link
                  to="/admin/managepages/homepage"
                  className="nav-link text-success">
                  Home Page
                </Link>
              </li>
              <li className="list-group-item">
                <Link
                  to="/admin/managepages/homepage"
                  className="nav-link text-success">
                  Home Page
                </Link>
              </li>
              <li className="list-group-item">
                <Link
                  to="/admin/managepages/homepage"
                  className="nav-link text-success">
                  Home Page
                </Link>
              </li>
              <li className="list-group-item">
                <Link
                  to="/admin/managepages/homepage"
                  className="nav-link text-success">
                  Home Page
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Base>
  )
}

export default ManagePages
