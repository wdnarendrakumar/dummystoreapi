const { catchAsync } = require("../utils/catchAsync");

const { create, deleteOne, updateOne, find } = require('./category.service')

module.exports.categoryController = {
    addCategory: catchAsync(async (req, res) => {
        const category = await create(req.params)
        res.json({ data: category })
    }),
    removeCategory: catchAsync(async (req, res) => {
        const category = await deleteOne(req.params.categoryName)
        res.json(category)
    }),
    updateCategory: catchAsync(async (req, res) => {
        const category = await updateOne(req.params.categoryName, req.body)
        res.json(category)
    }),
    getCategory: catchAsync(async (req, res) => {
        const category = await find(req.body)
        res.json(category)
    })
}