import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector} from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editTableRequest, getTableById } from "../../../redux/tablesRedux";
import { getAllStatuses } from "../../../redux/tableStatusesRedux";
import style from './SingleTableForm.module.scss';
import clsx from 'clsx';
import { useState } from "react";
import adjustAmountPeople from "../../../utils/adjustAmountPeople";


const SingleTableForm = () => {
  const {id} = useParams();
  const table = useSelector(state => getTableById(state, id));
  const allStatuses = useSelector(getAllStatuses);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [status, setStatus] = useState(table.status);
  const [peopleAmount, setPeopleAmount] = useState(table.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(table.maxPeopleAmount);
  const [bill, setBill] = useState(table.bill);
  const [showBill, setShowBill] = useState(status === 'Busy');

  const selectChange = newStatus =>{
    setStatus(newStatus);
    if (newStatus === 'Busy'){
      setShowBill(true);
      
    } else {
      setShowBill(false);
      setBill(0);
    }
  };
  
  const submitHandle = e => {
    e.preventDefault();
    const table = {
      id: id,
      status: status,
      peopleAmount: parseInt(peopleAmount),
      maxPeopleAmount: parseInt(maxPeopleAmount),
      bill: parseInt(bill)
    };
    dispatch( editTableRequest(table));
    navigate('/');
  };

  return(
    <div>
      <h2>Table {id}</h2>
      <Form onSubmit={e => submitHandle(e)}>
          <Form.Group className="my-2">
            <Form.Label className="fw-bold">Status: </Form.Label>
            <Form.Select value={status} onChange={ e => selectChange(e.target.value)} className={style.select} >
                { allStatuses.map(status => <option key={status.id} value={status.status}> {status.status} </option>) }
            </Form.Select>
          </Form.Group>
          <Form.Group className="my-2">
            <Form.Label className="fw-bold" >People: </Form.Label>
            <Form.Control value={peopleAmount} onChange={e => setPeopleAmount(adjustAmountPeople(e.target.value, maxPeopleAmount))} className={clsx(style.inputPeople, "me-2")} type="number" ></Form.Control>
            /
            <Form.Control value={maxPeopleAmount} onChange={e=> setMaxPeopleAmount(adjustAmountPeople(e.target.value))} className={clsx(style.inputPeople, "ms-2")} type="number" ></Form.Control>
          </Form.Group >
          <Form.Group className={clsx( !showBill && style.isShowBill, "my-2")}>
            <Form.Label className="fw-bold" >Bill: </Form.Label>
            $<Form.Control value={bill} onChange={e => setBill(e.target.value)} className={clsx(style.inputBill, "ms-2")} type="number" ></Form.Control>
          </Form.Group>
        <Button type="submit"  className="mt-2">Update</Button>
      </Form>
    </div>
  )
};

export default SingleTableForm;