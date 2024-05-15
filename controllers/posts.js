const Post = require("../models/posts");
const handleSuccess = require("../service/handleSuccess");
const handleError = require("../service/handleError");
const { checkPostFormatData } = require("../tools/posts");

const getPosts = async (req, res) => {
  const allPost = await Post.find();
  handleSuccess(res, allPost, `取得${allPost.length}則貼文`);
};

const createPosts = async (req, res) => {
  try {
    const errorMsg = checkPostFormatData(req.body, res);
    if (errorMsg !== null) return handleError(res, errorMsg);
    const newPost = await Post.create(req.body);
    handleSuccess(res, newPost, "新增貼文成功");
  } catch (err) {
    handleError(res, err);
  }
};

const updatePosts = async (req, res) => {
  try {
    const errorMsg = checkPostFormatData(req.body, res);
    if (errorMsg !== null) return handleError(res, errorMsg);
    await Post.findByIdAndUpdate(req.params.id, req.body);
    handleSuccess(res, req.body, "更新貼文成功");
  } catch (err) {
    handleError(res, err);
  }
};

const deleteAllPost = async (req, res) => {
  const deleteAllPost = await Post.deleteMany();
  handleSuccess(res, deleteAllPost, "已刪除全部貼文");
};

const deleteOnePost = async (req, res) => {
  try {
    const data = await Post.findById(req.params.id);
    if (data !== null) {
      const deletePost = await Post.findByIdAndDelete(req.params.id, req.body);
      handleSuccess(res, deletePost, `已刪除${data.name}的貼文`);
    } else {
      handleError(res, "找不到此筆資料,刪除失敗");
    }
  } catch (err) {
    handleError(res, err);
  }
};

module.exports = {
  getPosts,
  createPosts,
  updatePosts,
  deleteAllPost,
  deleteOnePost,
};
