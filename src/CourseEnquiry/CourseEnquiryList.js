import axios from "axios";
import { useState, useEffect} from "react";
import CourseEnquiry from "./CourseEnquiry";
import '../Staff.css'



function CourseEnquiryList(){
    if( localStorage.getItem('role')!=="admin"){
        window.location='/';
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
    <h1 style ={{marginTop:"90px"}} >Course Enquiry List</h1>
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