import { useState ,useEffect} from "react";
import '../Main.css'
import axios from 'axios'
import { useParams } from "react-router-dom";
function CourseEdit() {
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
        .get(`http://localhost:3002/courses/${props.id}`)
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
        .put(`http://localhost:3002/courses/${props.id}`,inputs)
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
                <label>Course Name:</label>
                <input style={{marginLeft:83}}type="text" name="course_name" value={inputs.course_name || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Course Fee:</label>
                <input style= {{marginLeft:60}} type="text" name="course_fee"  value={inputs.course_fee || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Course Image:</label>
                <input type="url" name="course_image"  value={inputs.course_image || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Duration :</label>
                <input type="text" name="duration"  value={inputs.duration || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Criteria:</label>
                <input style={{marginLeft:49}} type="text" name="criteria"  value={inputs.criteria || ""} onChange={handleChange} required />
            </div>
            
            <div>
                <label>Batch Id:</label>
                <input style={{marginLeft:21}}type="number" name="batch_id" value={inputs.batch_id || ""} onChange={handleChange} required />
            </div>          
            <button type="submit" >Update</button>
        </form>
    </div>);
}

export default CourseEdit;