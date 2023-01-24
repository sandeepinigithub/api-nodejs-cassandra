const express = require('express');
const morgan = require("morgan");
const app = express();
const userRoutes = require('./routes/user.route')
const commonMiddleware = require('./middleware/common.middleware')

// +++++ Middleware Start +++++
app.use(commonMiddleware.requestLogger);
app.use(commonMiddleware.requestTime)
// +++++ Package middleware  Start +++++
app.use(morgan("dev"));
// +++++ Package middleware  End +++++
// +++++ Middleware End +++++

app.use("/",userRoutes); 
app.use("/user",userRoutes);

app.listen(3000,()=>{
    console.log("Server is running...")
})