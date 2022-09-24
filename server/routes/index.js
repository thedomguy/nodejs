const { Router } = require("express")
const apiRoutes = require("./apiRoutes")

const router = Router()

router.get("/test", (req, res) => {
    console.log("test");
    res.json({
        "data": "test"
    })
    res.end()
})

router.use("/api", apiRoutes)

module.exports = router