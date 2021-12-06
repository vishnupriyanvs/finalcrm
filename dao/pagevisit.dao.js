const Gig=require('../models/pagevisit');
var pageVisitDao={
    findAll:findAll,
    updateGig:updateGig,
    findById:findById,
    create:create
}

function create(pagevisit){
    var newpagevisit = new Gig(pagevisit);
   
    return newpagevisit.save();
    
}

function findAll(){
    return Gig.findAll();
}

function findById(id){
    return Gig.findByPk(1);
}

function updateGig(counter,previous){
    if(counter==1){
        var updateGig={
            home_counter:previous.home_counter+1
        }
    }
    if(counter==2){
        var updateGig={
            course_counter:previous.course_counter+1
        }
    }
    if(counter==3){
        var updateGig={
            resource_counter:previous.resource_counter+1
        }
    }
    return Gig.update(updateGig,{where:{id:1}});
}

module.exports=pageVisitDao

