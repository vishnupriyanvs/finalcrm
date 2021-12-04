import axios from "axios";
import { useState, useEffect} from "react";
import Course from "./Course";
import './Resource.css'



function CourseSalesPipeLine(){
    if(!localStorage.getItem('mytoken')){
        window.location = '/login'
    }
    //initialize the use case to empty
    const [course,setcourse] = useState([])
    useEffect(()=>{
        console.log("use effect hook executed");
        axios
        .get('http://localhost:4500/crm/ceenquiry')
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            setcourse(response.data)
        })
        /*setTimeout(()=>{
            fetchcourseList();
        },5000)*/
        
    },[])

    return(<>
    <h1 style ={{marginTop:"90px"}} >Sales Pipe Line</h1>
    <div id="unorder">
        <center>
        <table cellSpacing = "0" cellPadding ="0">
            <tr>
                <th>Course Name</th>
                <th>Current Status</th>
                <th>Previous Status</th>
                <th>Date</th>
                <th>Time</th>
            </tr>
            {course.map(course =>
            
            <tr key ={course.id}>
                <Course details ={course}/>
            </tr>
            
             )}
        </table>
        
        </center>
    </div>
    
    </>
    );
}
export default CourseSalesPipeLine;