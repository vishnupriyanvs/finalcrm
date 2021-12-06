import { useState,useEffect } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";
import {Button} from 'react-bootstrap'

import './CourseToasterStyle.css'
import Popup from "reactjs-popup";


function UserCourseDetails(){

    
    axios.put(`http://localhost:4500/crm/pagevisit/${2}`)
    const [course,setcourse] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()


    useEffect(()=>{
        console.log("use effect hook executed");
        
        axios
        .get(`http://localhost:4500/crm/course/${id}`)
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            setcourse(response.data)
        })
        
    },[])

    return(<>
    <div > 
    <h1 style={{marginTop:'90px'}}>Course Details</h1>
    <div id="secondary">
    <h3>{course.course_name}</h3>
    <img style={{width:"200px",height:"200px"}} src={course.course_image} ></img>
    <h3>Course Fee: {course.course_fee}</h3>
    <h3>Duration: {course.duration}</h3>
    <h3>Criteria: {course.criteria}</h3>
    </div>
    </div>
    <button><a style={{textDecoration:"none",color:"white"}} href="/courselist">Go back </a></button>

    <button type="button" onClick={()=>navigate('/addce')}>Enroll</button>      
    <div>
      
    </div>

    </>
    );
}


export default UserCourseDetails;