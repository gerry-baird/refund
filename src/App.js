import { Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Refund from "./Refund";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Refund Processing</Navbar.Brand>
      </Navbar>
      <br></br>
      <Container>
        <Refund></Refund>
      </Container>
      <div className="footer">
        <p className="text-center">&copy; 2021 : WM Airlines</p>
      </div>
    </div>
  );
}

export default App;
