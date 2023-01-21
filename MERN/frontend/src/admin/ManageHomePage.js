import React from "react"
import Base from "../core/Base"
import { Link } from "react-router-dom"

function ManageHomePage() {
  return (
    <Base>
      <div className="row justify-content-center">
        <div className="col-5">
          <div className="card mt-3 ml-5 mr-5 mb-5">
            <h4 className="card-header bg-dark text-white">
              All sections on Home Page
            </h4>
            <ul className="list-group">
              <li className="list-group-item">
                <Link
                  to="/admin/managepages/homepage/hero"
                  className="nav-link text-success">
                  Hero Section
                </Link>
              </li>
              <li className="list-group-item">
                <Link
                  to="/admin/managepages/homepage/about1"
                  className="nav-link text-success">
                  About Section 1
                </Link>
              </li>
              <li className="list-group-item">
                <Link
                  to="/admin/managepages/homepage/gallery"
                  className="nav-link text-success">
                  Gallery Section
                </Link>
              </li>
              <li className="list-group-item">
                <Link
                  to="/admin/managepages/homepage/about2"
                  className="nav-link text-success">
                  About Section 2
                </Link>
              </li>
              <li className="list-group-item">
                <Link
                  to="/admin/managepages/homepage/ourservices"
                  className="nav-link text-success">
                  Our Services Section
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Base>
  )
}

export default ManageHomePage
