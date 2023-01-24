const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');


// +++++ / +++++ 
router.get('/',(req,res)=>{
    res.redirect('/user/getAllUser')
});
// +++++ /user/getAllUser +++++ 
router.get('/getAllUser',userController.getAllUser);
module.exports = router;