import express from "express";
import { getAllPosts, getPostById, createPost, deletePost, deleteComment, getUserPosts } from "../controllers/postController.js";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/:id", getPostById);
router.post("/", createPost);
router.delete("/:id", deletePost);
router.delete("/:postId/comments/:commentId", deleteComment);
router.get("/user/:userId", getUserPosts);

export default router;
