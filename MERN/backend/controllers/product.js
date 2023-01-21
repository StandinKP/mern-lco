const Product = require("../models/product")
const formidable = require("formidable")
const _ = require("lodash")
const fs = require("fs")

exports.getProductbyId = (req, res, next, id) => {
  Product.findById(id)
    .populate("category")
    .exec((err, product) => {
      if (err) {
        return res.status(400).json({
          error: "Product not found",
        })
      }
      req.product = product
      next()
    })
}

exports.createProduct = (req, res) => {
  let form = new formidable.IncomingForm()
  form.keepExtensions = true

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "There is a problem with the image",
      })
    }
    //Destructure the fields
    const { name, description, price, category, stock } = fields

    if (!name || !description || !price || !category || !stock) {
      return res.status(400).json({
        error: "Please fill all fields",
      })
    }
    //Restrictions on fields
    let product = new Product(fields)

    //Handle File
    if (files.photo) {
      if (files.photo.size > 3000000) {
        return res.status(400).json({
          error: "File size too large",
        })
      }
      product.photo.data = fs.readFileSync(files.photo.path)
      product.photo.contentType = files.photo.type
    }

    //Save to DB
    product.save((err, product) => {
      if (err) {
        return res.status(400).json({
          error: "Couldn't save Tshirt to DB",
        })
      }
      res.json(product)
    })
  })
}

exports.getProduct = (req, res) => {
  req.product.photo = undefined
  return res.json(req.product)
}

//Middlewares
exports.photo = (req, res, next) => {
  if (req.product.photo.data) {
    res.set("Content-Type", req.product.photo.contentType)
    return res.send(req.product.photo.data)
  }
  next()
}

exports.updateStock = (req, res, next) => {
  let myOperations = req.body.order.products.map((prod) => {
    return {
      updateOne: {
        filter: { _id: prod._id },
        update: { $inc: { stock: -prod.count, sold: +prod.count } },
      },
    }
  })

  Product.bulkWrite(myOperations, {}, (err, products) => {
    if (err) {
      return res.status(400).json({
        error: "Bulk operation failed!",
      })
    }
    next()
  })
}

//Delete controller
exports.deleteProduct = (req, res) => {
  let product = req.product
  product.remove((err, deletedProduct) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete " + product.name + " product",
      })
    }
    res.json({
      message: "Deletion successfully done",
      deletedProduct,
    })
  })
}

//Update controller
exports.updateProduct = (req, res) => {
  let form = new formidable.IncomingForm()
  form.keepExtensions = true

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "There is a problem with the image",
      })
    }

    //Updation code
    let product = req.product
    product = _.extend(product, fields)

    //Handle File
    if (files.photo) {
      if (files.photo.size > 3000000) {
        return res.status(400).json({
          error: "File size too large",
        })
      }
      product.photo.data = fs.readFileSync(files.photo.path)
      product.photo.contentType = files.photo.type
    }

    //Save to DB
    product.save((err, product) => {
      if (err) {
        return res.status(400).json({
          error: "Couldn't update Tshirt to DB",
        })
      }
      res.json(product)
    })
  })
}

//List all products
exports.getAllProducts = (req, res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : 8
  let sortBy = req.query.sortBy ? req.query.sortBy : "_id"

  Product.find()
    .select("-photo")
    .populate("category")
    .sort([[sortBy, "asc"]])
    .limit(limit)
    .exec((err, products) => {
      if (err) {
        return res.status(400).json({
          error: "No Products Found",
        })
      }
      res.json(products)
    })
}

exports.getAllUniqueCategories = (req, res) => {
  Product.distinct("category", {}, (err, category) => {
    if (err) {
      return res.status(400).json({
        error: "No category found",
      })
    }
    res.json(category)
  })
}
