import React from "react"
import { Link } from "react-router-dom"
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

function Footer() {
  return (
    <div>
      <footer>
        <div
          id="section_bg02"
          className="footer-area section-bg"
          style={{
            backgroundImage: require("../assets/img/gallery/section_bg02.png"),
          }}>
          <div className="container">
            <div className="footer-top footer-padding">
              <div className="row d-flex justify-content-between">
                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-8">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-logo">
                      <a href="index.html">
                        <img
                          src={require("../assets/img/logo/logo2_footer.png")}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
                {/* Links to social media */}
                <div className="col-xl-2 col-lg-2 col-md-5 col-sm-6">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Useful Links</h4>
                      <ul>
                        <li>
                          <a href="/">Policy</a>
                        </li>
                        <li>
                          <a href="/">Terms & Conditions</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-7">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Instagram Feed</h4>
                    </div>
                    <div className="instagram-gellay">
                      <ul className="insta-feed">
                        <li>
                          <a href="/">
                            <img
                              src={require("../assets/img/gallery/instagram1.png")}
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <img
                              src={require("../assets/img/gallery/instagram2.png")}
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <img
                              src={require("../assets/img/gallery/instagram3.png")}
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <img
                              src={require("../assets/img/gallery/instagram4.png")}
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <img
                              src={require("../assets/img/gallery/instagram5.png")}
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <img
                              src={require("../assets/img/gallery/instagram6.png")}
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
