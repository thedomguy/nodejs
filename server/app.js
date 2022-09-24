const express = require("express")
const indexRouter = require("./routes/index")
const app = express()

app.use(express.json())

module.exports = (config) => {
    app.use("/", indexRouter)
    return app
}