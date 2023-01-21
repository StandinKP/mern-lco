import React, { useState, useEffect } from "react"
import Base from "./Base"
import ProductCard from "./ProductCard"
import { getProducts } from "./helper/coreapicalls"
import Herosection from "./Herosection"
import Abousection1 from "./Abousection1"
import Gallerysection from "./Gallerysection"
import Aboutsection2 from "./Aboutsection2"
import Ourservices from "./Ourservices"

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

export default function Home() {
  return (
    <Base>
      <Herosection />
      <Gallerysection />

      <Abousection1 />
      <Aboutsection2 />
      <Ourservices />
    </Base>
  )
}
