const PageVisitControllers=require('../dao/pagevisit.dao');
var pageVisitController={
    findGigs:findGigs,
    updateGig:updateGig,
    findGigById:findGigById,
    addPageVisit:addPageVisit
}

function addPageVisit(req,res){
    let pagevisit = req.body;
    PageVisitControllers.create(pagevisit).
    then((data) => {
      
        res.send(data);
    })
    .catch((error)=>{
        console.log(error);
    });
}

function findGigs(req,res){
    PageVisitControllers.findAll()
        .then((data)=>{
            res.send(data);
        })
        .catch((error)=>{
            console.log(error);
        });
}

function findGigById(req,res){
    PageVisitControllers.findById(req.params.id)
     .then((data) => {
         res.send(data);
     })
     .catch((error) =>{
         console.log(error);
     });
 }

function updateGig(req,res){
    const counter = req.params.id
    PageVisitControllers.findById(1)
    .then((data)=>{
        PageVisitControllers.updateGig(counter,data)
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

module.exports=pageVisitController