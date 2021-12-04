import { Link } from "react-router-dom"
import { Card , ListGroupItem,ListGroup} from "react-bootstrap";
function CardLayout(props) {
    return (<>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
        <img style={{ width: "200px", height: "200px" }} src={props.details.course_image} alt=""></img>
        <h4>{props.details.course_name}</h4>

        <div id="buttonsright">
            <button style={{ width: '100px' }}><Link style={{ color: 'white', textDecoration: 'none' }} to={`/coursedetails/${props.details.id}`}>View Details</Link></button>
        </div>
    </>)
}
export default CardLayout;