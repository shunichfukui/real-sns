const express = require("express");
const app = express();
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const authRoute = require("./routes/auth");

require("dotenv").config();
const mongoose = require("mongoose");

// データベース接続
mongoose.connect(process.env.MONGOURL).then(() => {
    console.log("DBと接続中...")
}).catch((err) => {
    console.log(err)
});

// ミドルウェア
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.get("/", (req, res) => {
    res.send("hello express");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`listening on ${process.env.PORT || 3000}`);
});