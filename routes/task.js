const express=require('express');
const router=express.Router();
const taskController=require('../controllers/task_controller');

router.post('/add',taskController.add);
router.get('/delete',taskController.delete);


module.exports=router;



