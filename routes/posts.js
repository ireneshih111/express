const express = require("express");
const {
  getPosts,
  createPosts,
  updatePosts,
  deleteAllPost,
  deleteOnePost,
} = require("../controllers/posts");

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPosts);
router.patch("/:id", updatePosts);
router.delete("/", deleteAllPost);
router.delete("/:id", deleteOnePost);

module.exports = router;
