import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function AppNavLinks() {
  let isLogin = localStorage.getItem("appjwt");

  return (
    <>
      {isLogin ? <AppNavLinks4LoggedInUser /> : <AppNavLinks4NotLoggedInUser />}
    </>
  );
}

function AppNavLinks4LoggedInUser() {
  let navigate = useNavigate();

  const processLogout = () => {
    localStorage.clear();
    navigate(0);
  };

  return (
    <>
      <Navbar bg="success" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            My Project
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/simpleform">
                Simple Form
              </Nav.Link>
              <Nav.Link as={Link} to="/simplelist">
                Simple List
              </Nav.Link>
              <Nav.Link as={Link} to="/playground">
                Playground
              </Nav.Link>
              <Nav.Link as={Link} to="/aboutus">
                About Us
              </Nav.Link>
              <Nav.Link onClick={processLogout}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

function AppNavLinks4NotLoggedInUser() {
  return (
    <>
      <Navbar bg="success" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            My Project
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/aboutus">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavLinks;
