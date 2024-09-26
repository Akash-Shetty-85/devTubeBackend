class ApiError extends errors {
   constructor(
      stausCode,
      message = "somthing went wrong",
      errors = [],
      stack = ""
   ) {
      super(message)
      this.stausCode = stausCode
      this.data = null
      this.message = message
      this.success = false
      this.errors = errors

      if (stack) {
         this.stack = stack

      } else {
         this.captureStackTrace(this, this.constructor)
      }
   }
}


export { ApiError }