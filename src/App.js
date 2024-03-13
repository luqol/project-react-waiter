import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import { Container } from "react-bootstrap";
import Header from "./components/views/Header/Header";

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
    </Container>
  );
}

export default App;
