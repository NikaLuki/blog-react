const express = require("express");
const Post = require("../models/Post");
const router = express.Router({ mergeParams: true });
const auth = require("../middleware/auth.middleware");

router.patch("/:postId", auth, async (req, res) => {
    try {
        const { postId } = req.params;
        if (postId) {
            const updatedPost = await Post.findByIdAndUpdate(postId, req.body, {
                new: true
            });
            res.send(updatedPost);
        } else {
            res.status(401).json({ message: "Unauthorized" });
        }
    } catch (error) {}
});

router.get("/", async (req, res) => {
    try {
        const list = await Post.find();
        res.status(200).send(list);
    } catch (error) {
        console.log("JOPA");
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        });
    }
});

router.post("/", auth, async (req, res) => {
    try {
        const newPost = await Post.create({ ...req.body });
        res.send(newPost);
    } catch (error) {
        res.status(401).json({ message: "Что-то" });
    }
});

module.exports = router;
