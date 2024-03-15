import { useDispatch, useSelector } from "react-redux";
import { getAllTables,  removeTableRequest } from "../../../redux/tablesRedux";
import { Row } from "react-bootstrap";
import HomeTableCard from "../../views/HomeTableCard/HomeTableCard";


const HomeForm = () => {
  const dispatch = useDispatch();

  const removeTableHandle = (e, id) => {
    e.preventDefault();
    dispatch(removeTableRequest(id));
  };
  
  const allTables = useSelector(getAllTables);
  return(
    <Row className="flex-column">
        { allTables.map( table => <HomeTableCard 
        key={table.id} id={table.id} status={table.status} 
        actionText={'Remove table'} action={removeTableHandle} /> ) }
    </Row>
  )
};

export default HomeForm;