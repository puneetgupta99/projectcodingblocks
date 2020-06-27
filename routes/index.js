const express=require('express');
const router=express.Router();
const homecontrolller=require('../controllers/home_controller');




router.get('/',homecontrolller.home);


router.use('/task',require('./task'));



module.exports=router;