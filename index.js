
const express = require('express');
const cors = require('cors');

const dotenv = require('dotenv');

const envConfig = dotenv.config({ path: __dirname + process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}`.trim() : ".env.sqlite"});

for(const key in envConfig){
    process.env[key]=envConfig[key];
}

const db = require('./config/database');
db.authenticate().then(() =>{
    console.log('Database connected....');
}).catch(err =>{
    console.log('Error:'+err);
})
const app=express();
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({extended:true,limit:'50mb'}));
app.use(cors("*"));

//Gig routes
app.use('/',require('./routes/routes'));

const PORT = process.env.PORT || 4500;
db.sync().then(() =>{
    app.listen(PORT,console.log(`Server started on port ${PORT}`));
}).catch(err => console.log("Error:" +err));