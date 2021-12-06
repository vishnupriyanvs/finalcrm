import './Card.css'
import {Link} from "react-router-dom"
function RCardLayout(props) {
    return (
        <>
            <div className="card" >
                <img src={props.details.picture} alt="Avatar" style={{width:"100px",height:"90px",marginTop:'10px'}}></img>
                <div className ="container">
                <h4><b>{props.details.resource_name}</b></h4>
                <button style={{float:'left'}}><Link style={{textDecoration:'none',color:'white'}}to={`/reuserdetails/${props.details.id}`}>More</Link></button>
                <button style={{float:'right'}}><Link style={{textDecoration:'none',color:'white'}} to={localStorage.getItem('mytoken') ?`/addre`:'/registeration'}>Enroll</Link></button>
                </div>
            </div>

        </>
    )
}
export default RCardLayout;