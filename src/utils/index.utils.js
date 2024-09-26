const asyncHandler = (errorHandler) =>{
    (req,res,next) => {
        Promise.resolve(asyncHandler(req,res,next)).catch( (err) => next(err))
    }
}

export { asyncHandler }