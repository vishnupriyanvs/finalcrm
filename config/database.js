const {Sequelize}=require('sequelize');
const db=new Sequelize('crm','userName','password',{
    host:'localhost',
    dialect:'sqlite',
    storage:'crmDb.sqlite',
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
});

module.exports=db;