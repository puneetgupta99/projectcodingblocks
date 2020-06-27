const db=require('mongoose');
const TodoList=require('../models/schema');

module.exports.add=function(req,res){

TodoList.create({
    taskName: req.body.taskname,
    date: req.body.date,
    taskDescription: req.body.task_description
}, function(err,newtask){
    if(err){
    console.log('there is a error in adding task');
    return;
}
    console.log(newtask);
})
  return res.redirect('/');
}

module.exports.delete=function(req,res){
    console.log(req.query.id);
    
    let id=req.query.id;
  TodoList.findByIdAndDelete(id,function(err){
        if(err){
            console.log("there is an error in deleting from the db");

            
        }else{
            res.redirect('/');
        }
  });    
}


module.exports.edit=function(req,res){

}