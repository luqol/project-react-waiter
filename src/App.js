import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import { Container } from "react-bootstrap";
import Header from "./components/views/Header/Header";
import SingleTable from "./components/pages/SingleTable/SingleTable";
import NotFound from "./components/pages/NotFound/NotFound";
import Footer from "./components/views/Footer/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTables } from "./redux/tablesRedux";
import { fetchStatuses } from "./redux/tableStatusesRedux";
import AddTable from "./components/pages/AddTable/AddTable";

const App = () => {
  const dispatch = useDispatch();
  
  useEffect( 
    () => {
      dispatch(fetchTables());
      dispatch(fetchStatuses());
    }
  ,[dispatch] ); 

  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/table/:id" element={ <SingleTable /> } />
        <Route path="/*" element={ <NotFound /> } />
        <Route path="/addtable" element={ <AddTable /> } />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
