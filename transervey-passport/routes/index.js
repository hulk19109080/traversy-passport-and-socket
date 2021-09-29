const router = require("express").Router()
const { home_get } = require("../controllers/index")


router.get("/", home_get)

module.exports = router