import axios from "axios";
import { useState, useEffect} from "react";
import Resource from "./Resource";
import './Resource.css'



function ResourceList(){
    if(!localStorage.getItem('mytoken')){
        window.location = '/login'
    }
    //initialize the use case to empty
    const [resouces,setResouces] = useState([])
    useEffect(()=>{
        console.log("use effect hook executed");
        axios
        .get('http://localhost:4500/crm/resource')
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            setResouces(response.data)
        })
        /*setTimeout(()=>{
            fetchresourceList();
        },5000)*/
        
    },[])

    return(<>
    <h1>Resource List</h1>
    <div id="unorder">
    <ul>
        {resouces.map(resource =>
            
            <li key ={resource.id}>
                <Resource details ={resource}/>
            </li>
            
        )}
    </ul>
    </div>
    
    </>
    );
}
export default ResourceList;