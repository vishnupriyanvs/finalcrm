function Course(props){
    return(<>
                <td>{props.details.course_name}</td>
                <td>{props.details.enquiry_status}</td>
                <td>{props.details.previous_enquiry_status}</td>
                <td>{props.details.date}</td>
                <td>{props.details.time}</td>
            
       
    </>)
}
export default Course;