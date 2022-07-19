const express = require("express")
const router = express.Router()
const User = require('../models/user')

router.post("/adduser", (req, res) => {
    let newUser = new User({ ...req.body })
    newUser.save()
        .then(user => res.status(200).json({ msg: "User added with success", user }))
        .catch(err => res.status(400).json(err))
})

router.get("/", (req, res) => {
    User.find()
        .then(users => res.status(200).json(users))
        .catch(err => res.status(400).json(err))
})

router.get("/:_id", (req, res) => {
    let { _id } = req.params
    User.find({ _id })
        .then(user => res.status(200).json(user))
        .catch(err => res.status(400).json(err))
})

router.delete("/:_id", (req, res) => {
    let { _id } = req.params
    User.findByIdAndDelete({ _id })
        .then(() => res.status(200).json({ msg: "User deleted with success" }))
        .catch(err => res.status(400).json(err))
})



router.put("/:_id", (req, res) => {
    let { _id } = req.params
    User.findByIdAndUpdate({ _id },{$set:{...req.body}})
        .then(() => res.status(200).json({ msg: "User updated with success" }))
        .catch(err => res.status(400).json(err))
})


module.exports = router