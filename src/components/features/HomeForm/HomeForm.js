import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tablesRedux";
import { Row } from "react-bootstrap";
import HomeTableCard from "../../views/HomeTableCard/HomeTableCard";


const HomeForm = () => {
  
  const allTables = useSelector(getAllTables);
  return(
    <Row className="flex-column">
        { allTables.map( table => <HomeTableCard key={table.id} id={table.id} status={table.status} /> ) }
    </Row>
  )
};

export default HomeForm;