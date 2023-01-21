require("dotenv").config()

const mongoose = require("mongoose")
const express = require("express")
const fileUpload = require("express-fileupload")
const app = express()
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")

//Routes
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")
const categoryRoutes = require("./routes/category")
const productRoutes = require("./routes/product")
const orderRoutes = require("./routes/order")
const stripeRoutes = require("./routes/stripePayment")
const uploadRoutes = require("./routes/upload")
// const paymentPaypalRoutes = require("./routes/paymentPaypal")

//DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED")
  })

//Middlewares
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload())

//My Routes
app.use("/api", authRoutes)
app.use("/api", userRoutes)
app.use("/api", categoryRoutes)
app.use("/api", productRoutes)
app.use("/api", orderRoutes)
app.use("/api", stripeRoutes)
app.use("/api", uploadRoutes)

//Port
const port = process.env.PORT || 8000

//Starting Server
app.listen(port, () => {
  console.log(`app is running at ${port}`)
})
