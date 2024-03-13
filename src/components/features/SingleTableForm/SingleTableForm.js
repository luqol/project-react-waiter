import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTableById } from "../../../redux/tablesRedux";
import { getAllStatuses } from "../../../redux/tableStatusesRedux";


const SingleTableForm = () => {
    const {id} = useParams();
    const table = useSelector(state => getTableById(state, id));
    const allStatuses = useSelector(getAllStatuses);

  return(
    <div>
      <h2>Table {id}</h2>
      <Form>
          <Form.Group>
            <Form.Label>Status: </Form.Label>
            <Form.Select value={table.status} >
                { allStatuses.map(status => <option key={status.id} value={status.status}> {status.status} </option>) }
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>People: </Form.Label>
            <Form.Control type="number" value={table.peopleAmount}></Form.Control>
            /
            <Form.Control type="number" value={table.maxPeopleAmount}></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Bill: </Form.Label>
            $<Form.Control type="number" value={table.bill}></Form.Control>
          </Form.Group>
        <Button>Update</Button>
      </Form>
    </div>
  )
};

export default SingleTableForm;