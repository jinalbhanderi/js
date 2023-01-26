const express = require("express")
const User = require("../model/user")
const router = express.Router()
const bcrypt = require("bcryptjs")
const auth=require("../middlewere/auth")
const jwt = require("jsonwebtoken")

router.get("/", (req, resp) => {
    resp.render("index")
})
router.post("/add", async (req, resp) => {
    try {
        const users = new User(req.body)
        await users.save()
        resp.render("index", { "msg": "rugistration successfully" })
    } catch (error) {
        console.log(error);
    }
})
router.get("/display",auth, async (req, resp) => {
    try {
        const data = await User.find()
        resp.render("display", { data: data })
    } catch (error) {

    }
})
router.get("/delete", async (req, resp) => {
    const id = req.query.did
    try {
        await User.findByIdAndDelete(id)
        resp.redirect("display")

    } catch (error) {

    }
})
router.get("/loginpage", async (req, resp) => {
    resp.render("login")
})
router.post("/login", async (req, resp) => {
    try {
        const data = await User.findOne({ email: req.body.email })
        const isvalid = await bcrypt.compare(req.body.password, data.password)
        // console.log(isvalid);
        if (isvalid) {
            const token = await data.generatetoken()
            resp.cookie("jwt", token)

            resp.redirect("display")
        }
        else {
            resp.render("login", { msg: "Invalid email or password" })
        }

    } catch (error) {
        resp.render("login", { msg: "Invalid email or password" })
    }
})
router.get("/logout",auth, async (req, resp) => {
    try {
        const user = req.user
        const token = req.token
        user.Tokens = user.Tokens.filter(ele => {
            return ele.token != token
        })
        await user.save()
        resp.clearCookie("jwt")
        resp.render("login")
    } catch (error) {
        console.log(error);
    }
})
router.get("/logoutall",auth, async (req, resp) => {
    try {
        const user = req.user
        const token = req.token
       user.Tokens=[]
        await user.save()
        resp.clearCookie("jwt")
        resp.render("login")
    } catch (error) {
        console.log(error);
    }
})

module.exports = router