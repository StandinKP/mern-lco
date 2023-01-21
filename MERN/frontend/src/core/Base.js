import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
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

const Base = ({ children }) => (
  <div>
    <Navbar />
    <div
      className="container-fluid text-center justify-content-center"
      style={{ marginTop: "150px" }}>
      <div>{children}</div>
    </div>
    <Footer />
  </div>
)

export default Base
