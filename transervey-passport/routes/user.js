const userRouter = require("express").Router()
const { login_get, register_get, register_post } = require("../controllers/user")


userRouter.get("/login", login_get)
userRouter.get("/register", register_get)
userRouter.post("/register", register_post)



module.exports = userRouter