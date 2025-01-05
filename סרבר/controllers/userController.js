const User = require("../models/User")

const createNewUser = async (req, res) => {
    const { name, username, email, address, phone } = req.body
    if (!username) {
        return res.status(400).json({ message: 'username is reuired' })
    }
    const user = await User.create({ name, username, email, address, phone })
    if (user) {
        return res.status(201).json({ message: 'New user created' })

    }
    else {
        return res.status(400).json({ message: 'Invalid user' })
    }

}

const getAllUsers = async (req, res) => {
    console.log("jnjbj");
    const users = await User.find().lean()
    console.log(users);
    if (!users?.length) {
        return res.status(500).json({ message: 'No users found' })
    }
    return res.json(users)
}

const updateUser = async (req, res) => {
    const { _id, name, username, email, address, phone } = req.body;
    if (!_id) {
        return res.status(500).json({ message: 'fields are required' })
    }
    const user = await User.findById(_id).exec()
    if (!user) {
        return res.status(500).json({ message: 'User not found' })
    }
    if(!name)
       user.name = name
    if(!username)
        return res.status(500).json({ message: 'fields are required' })
    
    user.username = username
    if(!email)
        user.email = email
    if(!address)
        user.address = address
    if(!phone)
        user.phone = phone

    const updateUser = await user.save()
    const users = await User.find().lean()
    return res.json(users)

}
const deleteUser = async (req, res) => {
    const id = req.params.id;

    // Confirm task exists to delete
    const user = await User.findById(id).exec()

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    }

    const result = await user.deleteOne()
    const users = await User.find().lean()
    return res.json(users)
}

const getUserById = async (req, res) => {
    const { id } = req.params
    // Get single task from MongoDB
    const user = await User.findById(id).lean()

    // If no tasks
    if (!user) {
        return res.status(400).json({ message: 'No user found' })
    }
    res.json(user)

}

module.exports = {
    getAllUsers,
    createNewUser,
    getUserById,
    updateUser,
    deleteUser
}




