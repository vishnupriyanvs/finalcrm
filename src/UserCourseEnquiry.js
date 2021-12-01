import { useState ,useEffect} from "react";
import './Main.css'
import axios from 'axios'
import { useParams } from "react-router-dom";
function UserCourseEnquiry() {
    if(!localStorage.getItem('mytoken')){
        window.location = '/login'
    }
    const {id} =useParams()
    return (<div>

        <MyForm id={id}/>

    </div>);
}
function MyForm(props) {
    const[inputs,setInputs] = useState({})

    useEffect(()=>{
        axios
        .get(`http://localhost:3600/course_enquiry/${props.id}`)
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            setInputs(response.data)
        })
        
    },[])

    function handleChange(event){
        const name = event.target.name ;
        const value = event.target.value;

        setInputs(values =>({...values, [name]:value}))

    }
    function handleSubmit(event){
        event.preventDefault();

        console.log(inputs);

        axios
        .put(`http://localhost:3600/course_enquiry/${props.id}`,inputs)
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            alert("The user details were updated");
        })
    }
    return (<div id ="main">
        <h1>Edit Book</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>User Name:</label>
                <input style={{marginLeft:49}} type="text" name="user_name"  value={inputs.user_name || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Course Name:</label>
                <input style={{marginLeft:83}}type="text" name="course_name" value={inputs.course_name || ""} onChange={handleChange} required readOnly/>
            </div>
            <div>
                <label>Course Fee:</label>
                <input style= {{marginLeft:60}} type="text" name="course_fee"  value={inputs.course_fee || ""} onChange={handleChange} required readOnly/>
            </div>
            <div>
                <label>Duration :</label>
                <input type="text" name="duration"  value={inputs.duration || ""} onChange={handleChange} required readOnly/>
            </div>
            <div>
                <label>Qualification:</label>
                <input style={{marginLeft:49}} type="text" name="qualification"  value={inputs.qualification || ""} onChange={handleChange} required readOnly/>
            </div>
                     
            <button type="submit" >Enroll</button>
        </form>
    </div>);
}

export default UserCourseEnquiry;