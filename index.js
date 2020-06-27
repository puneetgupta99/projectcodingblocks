const express=require('express');
const app=express();
const port= 8000;
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');
app.use(express.urlencoded());

app.use(express.static('./assets'));

app.use(expressLayouts);

app.use('/',require('./routes'));

app.set('layout extractStyles' ,true);
app.set('layout extractScripts' ,true);



app.set('view engine','ejs');
app.set('views','./views');




app.listen(port,function(err){
    if(err)
    console.log("there is a error bud in running the server BUD!!");
    else
    console.log("Great! The server is running fine");
});


