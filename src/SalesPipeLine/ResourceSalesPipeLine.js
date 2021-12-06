import axios from "axios";
import { useState, useEffect} from "react";
import Resource from "./Resource";
import './Resource.css'



function ResourceSalesPipeLine(){
    if( localStorage.getItem('role')!=="admin" && localStorage.getItem('role')!=="manager" ){
        window.location='/';
    }
    //initialize the use case to empty
    const [resources,setResources] = useState([])
    useEffect(()=>{
        console.log("use effect hook executed");
        axios
        .get('http://localhost:4500/crm/reenquiry')
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            setResources(response.data)
        })
        /*setTimeout(()=>{
            fetchresourceList();
        },5000)*/
        
    },[])

    return(<>
    <h1 style={{marginTop:"90px"}}>Sales Pipe Line</h1>
    <div id="unorder">
        <center>
        <table cellSpacing = "0" cellPadding ="0">
            <tr>
                <th>Resource Name</th>
                <th>Current Status</th>
                <th>Previous Status</th>
                <th>Date</th>
                <th>Time</th>
            </tr>
            {resources.map(resource =>
            
            <tr key ={resource.id}>
                <Resource details ={resource}/>
            </tr>
            
             )}
        </table>
        
        </center>
    </div>
    
    </>
    );
}
export default ResourceSalesPipeLine;