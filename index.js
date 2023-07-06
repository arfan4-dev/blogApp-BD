const express=require('express'); 
const app=express();

// middlewares


require('dotenv').config();
app.listen(process.env.PORT,()=>{console.log('Hello World');})

app.use(express.json())
// routes
const blogRouter=require('./routes/blogRouter');

// mount routes
app.use('/api/v1',blogRouter);
// import DB
const {dbConnection} = require('./config/database');
dbConnection()

// defualt route
app.get('/',(req,res)=>{
    res.send('<h2>This is the default Page </h2>');
})
