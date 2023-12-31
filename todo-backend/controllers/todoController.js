const mongoose=require('mongoose');
const Todos =require ('../dbtodo');


const getTodos=async (req,res)=>{
    try{
        const allTodos=await Todos.find({}).sort({createAt:-1});
        res.status(200).send(allTodos);
    }catch(err){
        res.status(400).send(err.message);

    }
};

const createTodos=async (req,res)=>{
    const dbTodo=req.body;
    try{
        const newTodo=await Todos.create(dbTodo);
        res.status(201).send(newTodo);
    }catch(err){
        res.status(500).send(err.message);

    }
};
const updateTodos = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`There is no existing Todo with the id of :${id}`);
        }

        const objTodo = await Todos.findById(id);

        if (!objTodo) {
            return res.status(404).send(`There is no existing Todo with the id of :${id}`);
        }

        const updatedCompleted = !objTodo.completed; // Alternar el estado de completado

        const update = { completed: updatedCompleted };

        const updateTodo = await Todos.findOneAndUpdate({ _id: id }, update, { new: true });

        if (!updateTodo) {
            return res.status(404).send(`There was a problem updating the Todo with the id of: ${id}`);
        }

        res.status(200).send(updateTodo);
    } catch (err) {
        res.status(500).send(err.message);
    }
};


const deleteTodos=async (req,res)=>{
    const { id }=req.params;
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(404).send(`There is no existing Todo with the id of :${id}`);
        }
       

        const deleteTodo=await Todos.findOneAndDelete({_id:id});
        
        res.status(200).send(deleteTodo);
    }catch(err){
        res.status(500).send(err.message);

    }
};

module.exports={
    getTodos,
    createTodos,
    updateTodos,
    deleteTodos,
};