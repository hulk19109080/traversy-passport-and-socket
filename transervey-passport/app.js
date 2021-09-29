const express = require("express");
const router = require("./routes");
const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")
const db = process.env.MONGO_URL
const userRouter = require("./routes/user");
const app = express()


mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("db is connected"))

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use(router)
app.use("/users", userRouter)


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running at ${port}`))