import { useDispatch, useSelector} from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { editTableRequest, getTableById } from "../../../redux/tablesRedux";
import TableForm from "../TableForm/TableForm";


const SingleTableForm = () => {
  const {id} = useParams();
  const table = useSelector(state => getTableById(state, id));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandle = updatedTable => {
    dispatch( editTableRequest({id, ...updatedTable}));
    navigate('/');
  };

  if (!table) return <Navigate to='/' />
  else return(
    <div>
      <h2>Table {id}</h2>
      <TableForm action={submitHandle} actionText={'Update'} 
      status={table.status} peopleAmount={table.peopleAmount} 
      maxPeopleAmount={table.maxPeopleAmount} bill={table.bill} />
    </div>
  )
};

export default SingleTableForm;