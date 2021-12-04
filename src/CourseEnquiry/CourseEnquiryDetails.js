import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import CourseEnquiryEdit from "./CourseEnquiryEdit";

//import './StaffDetails.css'
import axios from "axios";



function CourseEnquiryDetails() {
    if (!localStorage.getItem('mytoken')) {
        window.location = '/login'
    }
    const [course, setcourse] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        console.log("use effect hook executed");

        axios
            .get(`http://localhost:4500/crm/ceenquiry/${id}`)
            .then(response => {
                console.log('promise fulfilled')
                console.log(response)
                setcourse(response.data)
            })

    }, [])

    return (<>
        <div >
            <h1 style={{marginTop:"90px"}}>Course Enquiry Details</h1>
            <div id="secondary">
                
                <h3>User Name:{course.user_name}</h3>
                <h3>Course Name:{course.course_name}</h3>
                <h3>Status: {course.enquiry_status === "pending" ? <span style={{color:"orange"}}>{course.enquiry_status}</span>:course.enquiry_status === "not eligible" ? <span style={{color:"red"}}>{course.enquiry_status}</span>:<span style={{color:"green"}}>{course.enquiry_status}</span>}</h3>
                <CourseEnquiryEdit details={course}/>
            </div>
        </div>
        <button><a style={{ textDecoration: "none", color: "white" }} href="/celist">Go back </a></button>

        </>
    );
}

function Deletecourse(id) {
    axios
        .delete(`http://localhost:4500/crm/ceenquiry/${id}`)
        .then(response => {
            console.log('promise fulfilled')
            console.log(response)

        })
    window.location = '/CourseList'
}
export default CourseEnquiryDetails;