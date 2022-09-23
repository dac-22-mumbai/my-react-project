import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <AppNavLinks />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="notifications" element={<Notification />} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </>
  );
}

function AppNavLinks() {
  return (
    <>
      <Navbar bg="success" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            My Project
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/explore">
                Explore
              </Nav.Link>
              <Nav.Link as={Link} to="/notifications">
                Notifications
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

function Home() {
  return <div className="alert alert-primary">Home</div>;
}

function Explore() {
  return <div className="alert alert-danger">Explore</div>;
}

function Notification() {
  return <div className="alert alert-success">Notification</div>;
}

export default App;
