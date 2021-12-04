import {Link} from "react-router-dom"
function Resource(props){
    return(<>
    <img style={{width:"200px",height:"200px"}} src={props.details.picture}></img>
        <h4>{props.details.resource_name}</h4>
        
        <div id="buttonsright">
                <button style={{width:'100px'}}><Link style={{color:'white',textDecoration:'none'}} to={`/resourcedetails/${props.details.id}`}>View Details</Link></button>
                <button><Link to={`/resourcedelete/${props.details.id}`} style={{color:'white',textDecoration:'none'}}>Delete</Link></button>
        </div>
    </>)
}
export default Resource;