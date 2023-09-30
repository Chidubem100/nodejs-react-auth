

function errorHandler(err,req,res,next){
    let customError = {
        statusCode : err.statusCode || 500,
        msg: err.msg || "E don choke! Something went wrong"
    }
    console.log(err)
    // return res.status(customError.statusCode).json({ msg: customError.msg });
    // res.status(customError.statusCode).json(customError.msg)
    return res.status(customError.statusCode).json({error:customError.msg})
};

module.exports = errorHandler;