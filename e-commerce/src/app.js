require('dotenv').config()
require("../db/connection")
const path = require("path")
const cors = require("cors")
const express = require("express")
const app = express()
const statisFiles = path.join("../uploads")
app.use(express.static(statisFiles))
app.use(cors())
app.use(express.json())
const userRoutes = require("../routes/user.routes")
const categoryRoutes = require("../routes/category.routes")
const productRoutes = require("../routes/product.routes")
app.use("/user", userRoutes)
app.use("/cat", categoryRoutes)
app.use("/pro", productRoutes)
app.get('*', (req,res)=> res.status(404).send({ 
    apiStatus: false, 
    message: "incorrect route" 
}))
module.exports = app