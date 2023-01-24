const express = require('express');
const morgan = require("morgan");
const bodyParser = require('body-parser')
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

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use("/",userRoutes); 
app.use("/user",userRoutes);

app.listen(3000,()=>{
    console.log("Server is running...3000")
})