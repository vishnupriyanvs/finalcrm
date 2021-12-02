const express=require('express');
const router=express.Router();
const gigRoutes=require('./gigs.route');

router.use('/crm',gigRoutes);
module.exports=router;

