import { useState,useEffect } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";
import './ResourceToasterStyle.css'



function UserResourceDetails(){
  
    axios.put(`http://localhost:4500/crm/pagevisit/${3}`)
    
    const [resource,setResource] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()


    useEffect(()=>{
        console.log("use effect hook executed");
        
        axios
        .get(`http://localhost:4500/crm/resource/${id}`)
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            setResource(response.data)
        })
        
    },[])

    return(<>
    <div > 
    <h1 style={{marginTop:'90px'}}>Resource Details</h1>
    <div id="secondary">
    <img style={{width:"200px",height:"200px"}} src={resource.picture} ></img>
    <h3>Resource Name: {resource.resource_name}</h3>
    <h3>Description: {resource.description}</h3>
    <h3>Rent : {resource.resource_rent}</h3>
    <h3>Duration: {resource.duration}</h3>
    </div>
    </div>
    <button><a style={{textDecoration:"none",color:"white"}} href="/home">Go back </a></button>
    <button type="button" onClick={()=>navigate(`/addre`)}>Enroll</button>
    
    </>
    );
}
export default UserResourceDetails;