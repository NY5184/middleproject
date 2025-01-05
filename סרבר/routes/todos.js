const express=require("express")
const router=express.Router()
const Todos=require("../models/Todos")

const todoController = require("../controllers/TodoController")

router.get("/",todoController.getAllTodos)
router.get("/:id", todoController.getTodoById)
router.post("/", todoController.createNewTodo)
router.delete("/:id",todoController.deleteTodo)
router.put("/completed/:id",todoController.updateComplete)
router.put("/",todoController.updateTodo)

module.exports=router