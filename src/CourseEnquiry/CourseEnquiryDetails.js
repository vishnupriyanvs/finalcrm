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
            .get(`http://localhost:3600/course_enquiry/${id}`)
            .then(response => {
                console.log('promise fulfilled')
                console.log(response)
                setcourse(response.data)
            })

    }, [])

    return (<>
        <div >
            <h1>Course Enquiry Details</h1>
            <div id="secondary">
                
                <h3>User Name:{course.user_name}</h3>
                <h3>Course Name:{course.course_name}</h3>
                <h3>Course_fee: {course.course_fee}</h3>
                <h3>Duration: {course.duration}</h3>
                <h3>Qualification: {course.qualification}</h3>
                <h3>Status: {course.status === "pending" ? <span style={{color:"orange"}}>{course.status}</span>:course.status === "not eligible" ? <span style={{color:"red"}}>{course.status}</span>:<span style={{color:"green"}}>{course.status}</span>}</h3>
                <CourseEnquiryEdit details={course}/>
            </div>
        </div>
        <button><a style={{ textDecoration: "none", color: "white" }} href="/celist">Go back </a></button>

        <button type="button" onClick={() => navigate(`/courseedit/${course.id}`)}>Edit</button>
        <button type="button" onClick={() => Deletecourse(course.id)}>Delete</button>
    </>
    );
}

function Deletecourse(id) {
    axios
        .delete(`http://localhost:3002/courses/${id}`)
        .then(response => {
            console.log('promise fulfilled')
            console.log(response)

        })
    window.location = '/CourseList'
}
export default CourseEnquiryDetails;