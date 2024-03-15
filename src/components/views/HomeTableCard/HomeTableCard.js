import { Row, Col, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom";

const HomeTableCard = ({id, status}) => {

  return(
    <Row className="justify-content-between border-bottom py-3 align-items-center">
      <Col className="">
      <h5 className="d-inline">Table {id}</h5> <span className="ps-4"><b>Status:</b> {status} </span>
      </Col>
      <Col className="text-end ">
          <Button as={NavLink} className="py-1" to={`/table/${id}`} bg="primary" >Show more</Button>
          
      </Col>
    </Row>
    
  )
};

export default HomeTableCard;