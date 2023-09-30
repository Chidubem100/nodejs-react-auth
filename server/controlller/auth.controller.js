const asyncWrapper = require('../middlewares/asyncWrapper');

const register = asyncWrapper(async(req,res) =>{
    return res.status(200).json({ msg: "testing"});
    // res.status(200).json({msg:'testing the register route'})
});


module.exports ={
    register,
}