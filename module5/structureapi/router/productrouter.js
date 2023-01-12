const express = require("express")
const router = express.Router()
const task = require("../model/product")
router.post("/product", async (req, resp) => {
    try {
        const data = new task(req.body)
        const dt = await data.save()
        resp.send(dt)
    } catch (error) {
        resp.send(error)
    }
})
router.get("/product", async (req, resp) => {
    try {
        const dt = await task.find()
        resp.send(dt)
    } catch (error) {
        resp.send(error)
    }
})
router.get("/product/:id", async (req, resp) => {
    const id=req.params.id
    try {
        const dt = await user.findById(id)
        resp.send(dt)
    } catch (error) {
        resp.send(error)
    }
})
router.put("/product/:id", async (req, resp) => {
    const id=req.params.id

    try {
        const dt = await user.findByIdAndUpdate(id,req.body)

        resp.send(dt)
    } catch (error) {
        resp.send(error)
    }
})
router.delete("/product/:id", async (req, resp) => {
    const id=req.params.id

    try {
        const dt = await user.findByIdAndDelete(id)

        resp.send(dt)
    } catch (error) {
        resp.send(error)
    }
})
