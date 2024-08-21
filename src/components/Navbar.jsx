import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import mainlogo from "../assets/mainlogo.png";
import searchicon from "../assets/search.png";

function Navbar1() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#f8f9fa' }}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={mainlogo} alt='brandlogo' style={{ height: '100px', width: "130px" }}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="\home\Home.jsx">Home</Nav.Link>
            <Nav.Link href="#action2">Men</Nav.Link>
            <Nav.Link href="#action2">Women</Nav.Link>
            <Nav.Link href="#action2">Shoes</Nav.Link>
            <NavDropdown title="Accessories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Chains</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Watches</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Smart Watches</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">All type of Accessories</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">KIDS</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" style={{ borderRadius: "50%", borderColor: "transparent" }}>
              <img src={searchicon} alt='searchicon' style={{ width: "30px" }}></img>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
