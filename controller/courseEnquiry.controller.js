const courseEnquiryControllers=require('../dao/course_enquiry.dao');
var resourceEnquiryController={
    addGig:addGig,
    findGigs:findGigs,
    findGigById:findGigById,
    updateGig:updateGig,
    deleteById:deleteById
}

function addGig(req,res){
    let gig=req.body;
    courseEnquiryControllers.create(gig)
        .then((data)=>{
            res.send(data);
        })
        .catch((error)=>{
            console.log(error);
        });
}

function findGigById(req,res){
    courseEnquiryControllers.findById(req.params.id)
        .then((data)=>{
            res.send(data);
        })
        .catch((error)=>{
            console.log(error);
        });
}

function deleteById(req,res){
    courseEnquiryControllers.deleteById(req.params.id)
        .then((data)=>{
            res.status(200).json({
                message:"",
                gig:data
            })
        })
        .catch((error)=>{
            console.log(error);
        });
}

function updateGig(req,res){
    courseEnquiryControllers.findById(req.params.id)
        .then((data)=>{
        courseEnquiryControllers.updateGig(req.body,req.params.id,data.enquiry_status)
        .then((data)=>{
            res.status(200).json({
                message:"",
                gig:data
            })
        })
        .catch((error)=>{
            console.log(error);
        });  
        })
}

function findGigs(req,res){
    courseEnquiryControllers.findAll()
        .then((data)=>{
            res.send(data);
        })
        .catch((error)=>{
            console.log(error);
        });
}

module.exports=resourceEnquiryController;

