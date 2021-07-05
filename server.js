const express = require('express');    
const app = express();
const helmet = require('helmet')
const morgan = require('morgan')
var bodyParser = require('body-parser');
const { nextTick } = require('process');
const logging = require("./logger/logging.js")
const employees = require("./employees/emp.js")

app.use(helmet())
app.use(logging.log2);
app.use(morgan('tiny'));
app.use("/api/emps",employees)




app.listen(3000,()=>{
    console.log("Osama Mhiri working on port 3000 .....")
})
