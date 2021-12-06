import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import ResourceEnquiryEdit from "./ResourceEnquiryEdit";

//import './StaffDetails.css'
import axios from "axios";



function ResourceEnquiryDetails() {
    if (!localStorage.getItem('mytoken')) {
        window.location = '/login'
    }
    const [Resource, setResource] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        console.log("use effect hook executed");

        axios
            .get(`http://localhost:4500/crm/reenquiry/${id}`)
            .then(response => {
                console.log('promise fulfilled')
                console.log(response)
                setResource(response.data)
            })

    }, [])

    return (<>
        <div  >
            <h1 style={{marginTop:'90px'}}>Resource Enquiry Details</h1>
            <div id="secondary">
                
                <h3>User Name:{Resource.user_name}</h3>
                <h3>Resource Name:{Resource.resource_name}</h3>                
                <h3>Enquiry Status: {Resource.enquiry_status === "pending" ?<span style={{color:"red"}}>{Resource.enquiry_status}</span>:<span style={{color:"green"}}>{Resource.enquiry_status}</span>}</h3>
                <ResourceEnquiryEdit details={Resource}/>
            </div>
        </div>
        <button><a style={{ textDecoration: "none", color: "white" }} href="/relist">Go back </a></button>

       </>
    );
}

function DeleteResource(id) {
    axios
        .delete(`http://localhost:4500/crm/reenquiry/${id}`)
        .then(response => {
            console.log('promise fulfilled')
            console.log(response)

        })
    window.location = '/ResourceList'
}
export default ResourceEnquiryDetails;