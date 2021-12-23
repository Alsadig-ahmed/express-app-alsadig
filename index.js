// const { request } = require("express");
const express = require("express")
const path = require("path")

const app = express()
// static folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`the server is running on PORT : ${PORT}`))