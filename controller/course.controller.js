const courseDao=require('../dao/course.dao');
var courseController={
    addGig:addGig,
    findGigs:findGigs,
    findGigById:findGigById,
    updateGig:updateGig,
    deleteById:deleteById
}

function addGig(req,res){
    let gig=req.body;
    courseDao.create(gig)
        .then((data)=>{
            res.send(data);
        })
        .catch((error)=>{
            console.log(error);
        });
}

function findGigById(req,res){
    courseDao.findById(req.params.id)
        .then((data)=>{
            res.send(data);
        })
        .catch((error)=>{
            console.log(error);
        });
}

function deleteById(req,res){
    courseDao.deleteById(req.params.id)
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
    courseDao.updateGig(req.body,req.params.id)
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

function findGigs(req,res){
    courseDao.findAll()
        .then((data)=>{
            res.send(data);
        })
        .catch((error)=>{
            console.log(error);
        });
}

module.exports=courseController;

