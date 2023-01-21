import React, { useState, useEffect } from "react"

import Base from "../core/Base"
import { Link } from "react-router-dom"
import { isAuthenticated } from "../auth/helper"
import { getCategories, deleteCategory } from "./helper/adminapicall"
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

const ManageCategories = () => {
  const [categories, setCategories] = useState([])

  const { user, token } = isAuthenticated()

  const preload = () => {
    getCategories().then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        setCategories(data)
      }
    })
  }

  useEffect(() => {
    preload()
  }, [])

  const deleteThisCategory = (categoryId) => {
    deleteCategory(categoryId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        preload()
      }
    })
  }

  return (
    <Base title="Welcome admin" description="Manage products here">
      <div className="text-left ml-3">
        <Link className="btn" to={`/admin/dashboard`}>
          <span className="">Admin Home</span>
        </Link>
      </div>
      <div className="row">
        <div className="col-12 mb-5">
          <h2 className="text-center text-dark mb-3">Total 2 categories</h2>
          {categories.map((category, index) => {
            return (
              <div key={index} className="ml-3 mb-3">
                <div className="row text-center mb-2 ">
                  <div className="col-4">
                    <h3 className="text-dark text-left">{category.name}</h3>
                  </div>
                  <div className="col-4">
                    <Link
                      className="btn "
                      to={`/admin/category/update/${category._id}`}>
                      <span className="">Update</span>
                    </Link>
                  </div>
                  <div className="col-4">
                    <button
                      onClick={() => {
                        deleteThisCategory(category._id)
                      }}
                      className="btn ">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Base>
  )
}

export default ManageCategories
