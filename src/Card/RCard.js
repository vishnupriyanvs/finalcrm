import axios from "axios";
import { useState, useEffect} from "react";
import RCardLayout from "./RCardLayout";




function RCard(){
    
    //initialize the use case to empty
    const [resources,setResources] = useState([])
    useEffect(()=>{
        console.log("use effect hook executed");
        axios
        .get('http://localhost:4500/crm/resource')
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            setResources(response.data)
        })
        /*setTimeout(()=>{
            fetchStaffList();
        },5000)*/
        
    },[])

    

    

    return (<>
        
        <div>
            <h2 style={{marginTop:"300px"}}>Resources</h2>
            <span style={{display:"inline"}}>
                {resources.map(resource =>

                    <span style={{float:'left',margin:'30px 50px'}}>
                        <RCardLayout details={resource} />
                    </span>

                )}
            </span>
            
        </div>

    </>
    );
}
export default RCard;