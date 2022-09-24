const { Router } = require("express")
const apiRoutes = require("./apiRoutes")
const log = require("../middlewares/log")
const router = Router()
require('dotenv').config();

router.get("/:version", log, (req, res) => {
    console.log("test");
    res.json({
        "data": process.env.ENV
    })
    res.end()
})


module.exports = router