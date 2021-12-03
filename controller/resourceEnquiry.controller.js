const resourceEnquiryControllers=require('../dao/resource_enquiry.dao');
var resourceEnquiryController={
    addGig:addGig,
    findGigs:findGigs,
    findGigById:findGigById,
    updateGig:updateGig,
    deleteById:deleteById
}

function addGig(req,res){
    let gig=req.body;
    resourceEnquiryControllers.create(gig)
        .then((data)=>{
            res.send(data);
        })
        .catch((error)=>{
            console.log(error);
        });
}

function findGigById(req,res){
    resourceEnquiryControllers.findById(req.params.id)
        .then((data)=>{
            res.send(data);
        })
        .catch((error)=>{
            console.log(error);
        });
}

function deleteById(req,res){
    resourceEnquiryControllers.deleteById(req.params.id)
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
    resourceEnquiryControllers.findById(req.params.id)
    .then((data)=>{
        console.log(data.enquiry_status)
        resourceEnquiryControllers.updateGig(req.body,req.params.id,data.enquiry_status)
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
    resourceEnquiryControllers.findAll()
        .then((data)=>{
            res.send(data);
        })
        .catch((error)=>{
            console.log(error);
        });
}

module.exports=resourceEnquiryController;

