const Category = require("../models/category")

exports.getCategorybyId = (req, res, next, id) => {
  Category.findById(id).exec((err, category) => {
    if (err) {
      return res.status(400).json({
        error: "Category not found",
      })
    }
    req.category = category
    next()
  })
}

exports.createCategory = (req, res) => {
  const category = new Category(req.body)
  category.save((err, category) => {
    if (err) {
      return res.status(400).json({
        error: "Couldn't save category",
      })
    }
    res.json({ category })
  })
}

exports.getCategory = (req, res) => {
  return res.json(req.category)
}

exports.getAllCategories = (req, res) => {
  Category.find().exec((err, categories) => {
    if (err) {
      return res.status(400).json({
        error: "No category found",
      })
    }
    res.json(categories)
  })
}

exports.updateCategory = (req, res) => {
  let category = req.category
  console.log(category.name)
  console.log(req.body.name)
  category["name"] = req.body.name
  console.log(category.name)

  category.save((err, updatedCategory) => {
    if (err) {
      return res.status(400).json({
        error: "Category couldn't be updated",
      })
    }
    res.json(updatedCategory)
  })
}

exports.removeCategory = (req, res) => {
  const category = req.category

  category.remove((err, category) => {
    if (err) {
      return res.status(400).json({
        error: "Category couldn't be removed",
      })
    }
    res.json({
      message: "Successfully removed category '" + category.name + "'",
    })
  })
}
