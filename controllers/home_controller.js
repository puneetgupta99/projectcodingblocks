
const db=require('mongoose');
const TodoList=require('../models/schema');


module.exports.home=function(req,res){

TodoList.find({}, function(err,alltasks){

    if(err){
    console.log("there is a error in fetching the data from Database");
    return; 
    }

return res.render('home',{
    title: 'TODO LIST',
    TodoLS: alltasks
});

})

}


module.exports.tasks=function(req,res){
    res.end("<b>HEY HI THIS IS THE TASK AREA! IT'S EMPTY HERE :( </b>");
}