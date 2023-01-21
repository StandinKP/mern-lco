import React, { useState } from "react"
import Base from "./Base"
import { Link } from "react-router-dom"

function Details() {
  const [pincode, setPincode] = useState("")
  const [address, setAddress] = useState(false)

  const handleChange = (name) => (event) => {
    const allowedPincodes = ["411038", "411001", "411029"]
    const value = event.target.value
    allowedPincodes.includes(value)
      ? setPincode(event.target.value)
      : console.log("Not Allowed")
  }

  const errorMessage = () => {
    return (
      <p className="text-danger" style={{ display: pincode ? "none" : "" }}>
        Not servicable to your area. Only servicable to 411038, 411001, 411029
        right now
      </p>
    )
  }
  const showButton = () => {
    return (
      <Link to="/address">
        <button className="btn" style={{ display: pincode ? "" : "none" }}>
          Next
        </button>
      </Link>
    )
  }

  return (
    <Base>
      <form>
        <div className="form-group col-6">
          <label className="lead">Select your pincode</label>
          <select
            className="form-control my-3"
            onChange={handleChange("pincode")}
            required>
            <option>Select a pincode</option>
            <option value="411038">411038</option>
            <option value="411001">411001</option>
            <option value="411029">411029</option>
          </select>

          <div className="text-small">
            <p className="text-danger">
              Only servicable to 411038, 411001, 411029 right now
            </p>
          </div>
          <Link to="/address">
            <button type="submit" className="btn">
              Next
            </button>
          </Link>
        </div>
      </form>
    </Base>
  )
}

export default Details
