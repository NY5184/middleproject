
const { isValidObjectId } = require('mongoose')
const Post = require('../models/Posts')

const createNewPost = async (req, res) => {
    const { title, body } = req.body
    if (!title) {
        return res.status(400).json({ message: 'title is reuired' })
    }
    const post = await Post.create({ title, body })
    if (post) {
        return res.status(201).json({ message: 'New post created' })

    }
    else {
        return res.status(400).json({ message: 'Invalid post' })
    }

}

const getAllPosts = async (req, res) => {
    const posts = await Post.find().lean()

    
    if (!posts?.length) {
        return res.status(400).json({ message: 'No posts found' })
    }
    return res.json(posts)
}

const updatePost = async (req, res) => {
    const { _id, title, body } = req.body
    if (!_id || !title) {
        return res.status(400).json({ message: 'fields are required' })

    }
    const post = await Post.findById(_id).exec()
    if (!post) {
        return res.status(400).json({ message: 'Post not found' })
    }
    if(!title)
        return res.status(400).json({ message: 'fields are required' }) 
    post.title = title
    if(!body)
        post.body = body

    const updatePost = await post.save()
    const posts = await Post.find().lean()
    return res.json(posts)

}
const deletePost = async (req, res) => {
    const id  = req.params.id;
   
    // Confirm task exists to delete
    const post = await Post.findById(id).exec()
    
    if (!post) {
        return res.status(400).json({ message: 'Post not found' })
    }

    const result = await post.deleteOne()
    const posts = await Post.find().lean()
    return res.json(posts)
}

const getPostById = async (req, res) => {
  
    const { id } = req.params
    const post = await Post.findById(id).lean()
    if (!post) {
        return res.status(400).json({ message: 'No post found' })
    }
    res.json(post)

}

module.exports = {
    getAllPosts,
    createNewPost,
    getPostById,
    updatePost,
    deletePost
}




