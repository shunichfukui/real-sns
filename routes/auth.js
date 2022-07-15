const router = require("express").Router();
const User = require("../modules/User")

// ユーザー登録
router.post("/register", async (req, res) => {
    try {
        const existUser = await User.findOne({ email: req.body.email });
        if(existUser) return res.status(404).send("既に使われてるemailアドレスです。");
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
        const user = await newUser.save();
        return res.status(200).json(user);

    } catch (err) {
        return res.status(500).json(err);
    }
})

// ログイン
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if(!user) return res.status(404).send("ユーザーが見つかりません");
        const valiedPassword = req.body.password === user.password;
        if(!valiedPassword) return res.status(404).send("パスワードが違います");
        return res.status(200).send(user)

    } catch (err) {
        return res.status(500).json(err);
    }
})

module.exports = router;