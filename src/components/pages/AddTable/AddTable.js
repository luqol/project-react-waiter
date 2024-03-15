import { useDispatch } from "react-redux";
import TableForm from "../../features/TableForm/TableForm";
import { useNavigate } from "react-router-dom";
import { addTableRequest } from "../../../redux/tablesRedux";
import shortid from "shortid";


const AddTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addTableHandler = newTable => {

    dispatch(addTableRequest({ id: shortid(), ...newTable}));
    navigate('/')
  };
    
  return(
    <>
      <h2>Add table</h2>
      <TableForm action={addTableHandler} actionText={'Add table'} />
    </>
  )
};

export default AddTable;