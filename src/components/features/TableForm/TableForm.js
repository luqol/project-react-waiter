import { useSelector } from "react-redux";
import { getAllStatuses } from "../../../redux/tableStatusesRedux";
import { Button, Form } from "react-bootstrap";
import clsx from 'clsx';
import adjustAmountPeople from "../../../utils/adjustAmountPeople";
import style from './TableForm.module.scss';
import { useState } from "react";
import PropTypes from 'prop-types';

const TableForm = ({action, actionText, ...props}) => {
    const allStatuses = useSelector(getAllStatuses);

    const [status, setStatus] = useState(props.status || '');
    const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount || '');
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount || '');
    const [bill, setBill] = useState(props.bill || '');
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
          status: status,
          peopleAmount: parseInt(peopleAmount),
          maxPeopleAmount: parseInt(maxPeopleAmount),
          bill: parseInt(bill)
        };
        action(table);
      };
  return(
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
        <Button type="submit"  className="mt-2">{actionText}</Button>
      </Form>
  )
};

TableForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
};

export default TableForm;