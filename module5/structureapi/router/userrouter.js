const express = require("express")
const router = express.Router()
const task = require("../model/user")
router.post("/user", async (req, resp) => {
    try {
        const data = new task(req.body)
        const dt = await data.save()
        resp.send(dt)
    } catch (error) {
        resp.send(error)
    }
})
router.get("/user", async (req, resp) => {
    try {
        const dt = await task.find()
        resp.send(dt)
    } catch (error) {
        resp.send(error)
    }
})
router.get("/user/:id", async (req, resp) => {
    const id=req.params.id
    try {
        const dt = await user.findById(id)
        resp.send(dt)
    } catch (error) {
        resp.send(error)
    }
})
router.put("/user/:id", async (req, resp) => {
    const id=req.params.id

    try {
        const dt = await user.findByIdAndUpdate(id,req.body)

        resp.send(dt)
    } catch (error) {
        resp.send(error)
    }
})
router.delete("/user/:id", async (req, resp) => {
    const id=req.params.id

    try {
        const dt = await user.findByIdAndDelete(id)

        resp.send(dt)
    } catch (error) {
        resp.send(error)
    }
})
