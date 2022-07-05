const express = require("express");
const app = express();
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const authRoute = require("./routes/auth");

const PORT = 3000;

// ミドルウェア
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.get("/", (req, res) => {
    res.send("hello express");
});

app.listen(PORT, () => console.log("サーバー起動"));