import { Row, Col, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const HomeTableCard = ({id, status, actionText, action}) => {

  return(
    <Row className="justify-content-between border-bottom py-3 align-items-center">
      <Col className="">
      <h5 className="d-inline">Table {id}</h5> <span className="ps-4"><b>Status:</b> {status} </span>
      </Col>
      <Col className="text-end ">
          <Button as={NavLink} className="py-1 me-2" to={`/table/${id}`} bg="primary" >Show more</Button>
          <Button type="button" onClick={e => action(e, id)} className="py-1" to={`/table/${id}`} bg="primary" >{actionText}</Button>
          
      </Col>
    </Row>
    
  )
};

HomeTableCard.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  actionText: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default HomeTableCard;