const express=require('express');
const router=express.Router();
const courseController=require('../controller/course.controller');
const resourceController=require('../controller/resource.controller');
const resourceEnquiryController=require('../controller/resourceenquiry.controller');


router.post('/resource',resourceController.addGig);
router.get('/resource',resourceController.findGigs);
router.get('/resource/:id',resourceController.findGigById);
router.put('/resource/:id',resourceController.updateGig);
router.delete('/resource/:id',resourceController.deleteById);

router.post('/course',courseController.addGig);
router.get('/course',courseController.findGigs);
router.get('/course/:id',courseController.findGigById);
router.put('/course/:id',courseController.updateGig);
router.delete('/course/:id',courseController.deleteById);

router.post('/reenquiry',resourceEnquiryController.addGig);
router.get('/reenquiry',resourceEnquiryController.findGigs);
router.get('/reenquiry/:id',resourceEnquiryController.findGigById);
router.put('/reenquiry/:id',resourceEnquiryController.updateGig);
router.delete('/reenquiry/:id',resourceEnquiryController.deleteById);

module.exports=router;