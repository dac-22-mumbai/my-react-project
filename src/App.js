import { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import {
  Link,
  Route,
  Routes,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

function App() {
  return (
    <>
      <AppNavLinks />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="notifications" element={<Notification />} />

        {/** DYNAMIC PATH PARAMS */}
        <Route path="users">
          <Route path=":userid" element={<UserDetails />} />
        </Route>

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
  let navigate = useNavigate();

  // Logical decision at that time THIS HOOK IS IMPORTANT!!!!
  const go2explore = () => {
    let message = "Welcome to Expore section";
    navigate(`/explore?message=${message}`);
  };

  return (
    <div>
      <div className="alert alert-primary">Home</div>
      <input type="button" value="GO TO EXPLORE PAGE" onClick={go2explore} />
    </div>
  );
}

function Explore() {
  let [searchParams, setSearchParams] = useSearchParams();
  let message = searchParams.get("message");
  let id = searchParams.get("id");

  return (
    <>
      <div className="alert alert-danger">
        Explore {id} - {message}
      </div>
    </>
  );
}

function Notification() {
  return <div className="alert alert-success">Notification</div>;
}

function UserDetails() {
  let { userid } = useParams();
  console.log(userid);

  return (
    <>
      <div>User Details</div>
      <h1>{userid}</h1>
    </>
  );
}

export default App;
