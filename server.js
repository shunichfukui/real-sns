const express = require("express");
const app = express();
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const authRoute = require("./routes/auth");
const PORT = 3000;

require("dotenv").config();
const mongoose = require("mongoose");

// データベース接続
mongoose.connect(process.env.MONGOURL).then(() => {
    console.log("DBと接続中...")
}).catch((err) => {
    console.log(err)
});

// ミドルウェア
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.get("/", (req, res) => {
    res.send("hello express");
});

app.listen(PORT, () => console.log("サーバー起動"));