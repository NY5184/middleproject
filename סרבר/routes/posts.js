const express=require("express")

const postController = require("../controllers/postController")
const router=express.Router()
router.get("/",postController.getAllPosts)
router.get("/:id", postController.getPostById)
router.post("/", postController.createNewPost)                                                  
router.delete("/:id",postController.deletePost)
router.put("/",postController.updatePost)

module.exports=router                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           