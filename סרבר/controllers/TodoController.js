
const Todo=require("../models/Todos")

const createNewTodo=async(req,res)=>{
    const{title,tags,completed}=req.body
    if(!title){
        return res.status(400).json({message:'title is reuired'})}
        const todo=await Todo.create({title,tags,completed})
        if(todo){
            return res.status(201).json({message:'New todo created'})

        }
        else{
            return res.status(400).json({message:'Invalid todo'})
        }
    
}



const getAllTodos=async(req,res)=>{
    const todos=await Todo.find().lean()
    if(!todos?.length){
        return res.status(400).json({ message: 'No todos found' }) 
    }
   return res.json(todos)
}

const updateComplete=async (req, res) => {
    const id  = req.params.id;
    
    // Confirm task exists to delete
    const todo = await Todo.findById(id).exec()
    
    if (!todo) {
    return res.status(400).json({ message: 'Todo not found' })
    }
    
    
        todo.completed=!todo.completed
     
         const updateTodo=await todo.save()
         const todos=await Todo.find().lean()
        return res.status(200).json(todos)
    }

const updateTodo=async(req,res)=>{
    const{_id,title,tags,completed}=req.body
    if(!_id||!title){
        return res.status(400).json({ message: 'fields are required' })
    
    }
    const todo=await Todo.findById(_id).exec()
    if(!todo){
        return res.status(400).json({ message: 'Todo not found' })
    }
    if(!title)
   todo.title=title
    if(!tags)
   todo.tags=tags
    if(!completed)
   todo.completed=completed

    const updateTodo=await todo.save()
    const todos=await Todo.find().lean()
   return res.json(todos)

}
const deleteTodo = async (req, res) => {
    const id  = req.params.id;
    
    // Confirm task exists to delete
    const todo = await Todo.findById(id).exec()
    
    if (!todo) {
    return res.status(400).json({ message: 'Todo not found' })
    }
    
    const result = await todo.deleteOne()
    // 
    const todos=await Todo.find().lean()
   return res.json(todos)
    }

    const getTodoById = async (req, res) => {
        const {id} = req.params
        // Get single task from MongoDB
        const todo = await Todo.findById(id).lean()
        
        // If no tasks
        if (!todo) {
        return res.status(400).json({ message: 'No todo found' })
        }
        res.json(todo)
        
        }
       
            module.exports = {
                getAllTodos,
                createNewTodo,
                getTodoById,
                updateTodo,
                deleteTodo,
                updateComplete
                }

        


