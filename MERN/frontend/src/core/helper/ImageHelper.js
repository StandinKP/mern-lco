import React from "react"
import { API } from "../../backend"

const ImageHelper = ({ product }) => {
  const imageurl = `${API}/product/photo/${product._id}`

  return (
    <div
      className="rounded p-2 border"
      style={{ height: "220px", width: "220px" }}>
      <img
        src={imageurl}
        alt=""
        style={{ height: "200px", width: "200px" }}
        className="mb-3 rounded"
      />
    </div>
  )
}

export default ImageHelper
