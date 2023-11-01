const mongoose = require('mongoose');

 const todoSchema=mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        category:{
            type:String,
            required:true,
        },
        completed:{
            type:String,
            required:true,
        },
    },
    {timestamps:true}
 );

 module.exports = mongoose.model("todos",todoSchema);