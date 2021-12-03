import axios from "axios";
import { useState, useEffect} from "react";
import CourseEnquiry from "./CourseEnquiry";
import '../Staff.css'



function CourseEnquiryList(){
    if(!localStorage.getItem('mytoken')){
         window.location = '/login'
    }
    //initialize the use case to empty
    const [courses,setCourses] = useState([])
    useEffect(()=>{
        console.log("use effect hook executed");
        axios
        .get('http://localhost:4500/crm/ceenquiry')
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            setCourses(response.data)
        })
        /*setTimeout(()=>{
            fetchStaffList();
        },5000)*/
        
    },[])

    return(<>
    <h1>Course Enquiry List</h1>
    <div id="unorder">
    <ul>
        {courses.map(course =>
            
            <li key ={course.id}>
                <CourseEnquiry details ={course}/>
            </li>
            
        )}
    </ul>
    </div>
    
    </>
    );
}
export default CourseEnquiryList;