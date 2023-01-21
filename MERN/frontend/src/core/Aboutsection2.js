import React from "react"
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

function Aboutsection2() {
  return (
    <div className="about-area2 section-padding30">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-img ">
              <img src={require("../assets/img/gallery/about2.png")} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="about-caption mb-50">
              <div className="section-tittle mb-35">
                <span>About Our Restaurant</span>
                <h2>We Provide Good Food For Your Family!</h2>
              </div>
              <p className="pera-top">
                Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco
                laboris nisi ufsit aliquip ex ea commodo consequat is aute irure
                m, quis nostrud exer
              </p>

              <p className="mb-65 pera-bottom">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected our, or randomised words which don't look even slightly
                believab If you are going to use a passage.
              </p>
              <a href="about.html" className="border-btn">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutsection2
