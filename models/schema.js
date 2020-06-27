const mongoose=require('mongoose');

const todoSchema= new mongoose.Schema({
    taskName: { 
         type: String,
        required:true
    },
    date:{
        type: Date,
        required: true
    },
    taskDescription:{

        type: String,
        required: true
    }
})


const TodoList = mongoose.model('TodoList',todoSchema);

module.exports= TodoList;