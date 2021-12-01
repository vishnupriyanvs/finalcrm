import axios from "axios";
import { useState, useEffect} from "react";
import Courses from "./Courses";
import './Staff.css'



function CourseList(){
    if(!localStorage.getItem('mytoken')){
         window.location = '/login'
    }
    //initialize the use case to empty
    const [staffs,setStaffs] = useState([])
    useEffect(()=>{
        console.log("use effect hook executed");
        axios
        .get('http://localhost:3002/courses')
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            setStaffs(response.data)
        })
        /*setTimeout(()=>{
            fetchStaffList();
        },5000)*/
        
    },[])

    return(<>
    <h1>Library List</h1>
    <div id="unorder">
    <ul>
        {staffs.map(course =>
            
            <li key ={course.id}>
                <Courses details ={course}/>
            </li>
            
        )}
    </ul>
    </div>
    
    </>
    );
}
export default CourseList;