const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');


// +++++ / +++++ 
router.get('/',(req,res)=>{
    res.redirect('/user/getAllUser')
});
// +++++ /user/createUser +++++ 
router.post('/createUser',userController.createUser);
// +++++ /user/getAllUser +++++ 
router.get('/getAllUser',userController.getAllUser);
// +++++ /user/updateUser+++++ 
router.post('/updateUser',userController.updateUser);
// +++++ /user/deleteUser +++++ 
router.post('/deleteUser',userController.deleteUser);

module.exports = router;