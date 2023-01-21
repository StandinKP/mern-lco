import React from "react"
import { Link } from "react-router-dom"

import gallery1 from "../assets/img/gallery/gallery1.png"
import gallery2 from "../assets/img/gallery/gallery2.png"
import gallery3 from "../assets/img/gallery/gallery3.png"
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
function Gallerysection() {
  return (
    <section className="gallery-area fix ">
      <div
        className="gallery-top section-bg pt-90 pb-40"
        data-background="assets/img/gallery/section_bg01.png">
        <div className="container">
          <div className="row justify-content-center">
            <div className="cl-xl-7 col-lg-8 col-md-10">
              <div className="section-tittle text-center mb-70">
                <span>Our Offered Menu</span>
                <h2>Some Trendy And Popular Products Offered</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="properties__button">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    className="nav-item nav-link active"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="/nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true">
                    Special
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0">
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab">
            <div className="row no-gutters">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="gallery-box">
                  <div className="single-gallery">
                    <div
                      className="gallery-img big-img gallery1"
                      style={{
                        backgroundImage: `url(${gallery1})`,
                      }}></div>
                    <div className="g-caption">
                      <span>$25</span>
                      <h4>Delicious Food</h4>
                      <p>Ut enim ad minim veniam quis nostr.</p>
                      <Link
                        to="/product/5f085782a83af10a20b172f1"
                        className="btn order-btn">
                        View Product
                      </Link>
                      <a href="/" className="ml-2 btn order-btn">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="gallery-box">
                  <div className="single-gallery">
                    <div
                      className="gallery-img big-img"
                      style={{
                        backgroundImage: `url(${gallery2})`,
                      }}></div>
                    <div className="g-caption">
                      <span>$25</span>
                      <h4>Delicious Food</h4>
                      <p>Ut enim ad minim veniam quis nostr.</p>
                      <a href="/" className="btn order-btn">
                        View Product
                      </a>
                      <a href="/" className="ml-2 btn order-btn">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="gallery-box">
                  <div className="single-gallery">
                    <div
                      className="gallery-img big-img"
                      style={{
                        backgroundImage: `url(${gallery3})`,
                      }}></div>
                    <div className="g-caption">
                      <span>$25</span>
                      <h4>Delicious Food</h4>
                      <p>Ut enim ad minim veniam quis nostr.</p>
                      <a href="/" className="btn order-btn">
                        View Product
                      </a>
                      <a href="/" className="ml-2 btn order-btn">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallerysection
