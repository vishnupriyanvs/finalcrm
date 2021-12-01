import {Link} from "react-router-dom"
function CourseEnquiry(props){
    return(<>
   
        
        <h2>Name: {props.details.user_name}</h2>
        <h3>Course Name: {props.details.course_name}</h3>
        <h3>Status: {props.details.status}</h3>
        
        <div id="buttonsright">
                <button style={{width:'100px'}}><Link style={{color:'white',textDecoration:'none'}} to={`/cedetails/${props.details.id}`}>View Details</Link></button>
        </div>
    </>)
}
export default CourseEnquiry;