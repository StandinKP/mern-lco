import React, { useState } from "react"
import { Link } from "react-router-dom"
import Base from "./Base"

function Address() {
  const showButton = () => {
    return (
      <Link to="/address">
        <button className="btn">Next</button>
      </Link>
    )
  }
  const handleChange = () => {}

  const [address, setAddress] = useState("")
  return (
    <Base>
      <form>
        <div className="form-group col-6">
          <label className="lead">Enter your address</label>
          <input
            type="text"
            onChange={handleChange("address")}
            className="form-control my-3"
            autoFocus
            required
          />
          <div className="text-small">
            <p className="text-danger">
              Only servicable to 411038, 411001, 411029 right now
            </p>
          </div>
          {showButton()}
        </div>
      </form>
    </Base>
  )
}

export default Address
