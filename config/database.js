const mongoose = require('mongoose');
require('dotenv').config();

exports.dbConnection = () => {
    mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{console.log('Connected to DB')})
.catch((err)=>{console.log(err)});


}