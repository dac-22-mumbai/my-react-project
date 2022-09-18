import { Accordion, Alert, Badge, Carousel, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function App() {
  return (
    <div>
      <Navbar bg="danger" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Row>
        <Col sm="12" md="6" className="alert alert-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, nihil
          aspernatur saepe ratione sapiente porro tempore et labore veniam
          nostrum ab distinctio placeat fugiat eos reiciendis blanditiis beatae,
          id eius. Aut molestias nulla, consectetur nostrum eaque quia iusto
          quaerat natus obcaecati eveniet ea placeat aliquam eligendi in amet
          consequuntur modi voluptatem. Ratione, exercitationem excepturi neque
          velit nostrum quasi quo error sit itaque consequatur officia
          aspernatur assumenda sunt earum fugit non eius voluptate tempore id.
          Nemo expedita sequi dicta laboriosam aut rem, debitis ab illo
          voluptate, dolorem adipisci at officiis nam tempore laborum possimus
          quod iste nostrum modi minima accusantium sint.
        </Col>
        <Col sm="12" md="6" className="alert alert-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, nihil
          aspernatur saepe ratione sapiente porro tempore et labore veniam
          nostrum ab distinctio placeat fugiat eos reiciendis blanditiis beatae,
          id eius. Aut molestias nulla, consectetur nostrum eaque quia iusto
          quaerat natus obcaecati eveniet ea placeat aliquam eligendi in amet
          consequuntur modi voluptatem. Ratione, exercitationem excepturi neque
          velit nostrum quasi quo error sit itaque consequatur officia
          aspernatur assumenda sunt earum fugit non eius voluptate tempore id.
          Nemo expedita sequi dicta laboriosam aut rem, debitis ab illo
          voluptate, dolorem adipisci at officiis nam tempore laborum possimus
          quod iste nostrum modi minima accusantium sint.
        </Col>
      </Row>

      <div className="row">
        <div className="col-12 col-md-6 alert alert-primary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero omnis
          eius blanditiis reiciendis repellendus labore, quos cupiditate commodi
          deleniti eveniet cumque dolorum nemo magni quam odit harum eligendi,
          laudantium culpa, necessitatibus neque unde dolorem beatae quaerat ut.
          Hic officiis recusandae ipsam quas quos est, earum voluptates repellat
          incidunt, quo modi nulla dolor vero eum consectetur. Quo cum quia
          praesentium, ab esse odio illum. Porro nam veritatis, dolores ducimus
          expedita voluptate explicabo sequi officiis facere odio alias labore
          fuga cumque aperiam facilis excepturi. Qui ad ipsum nemo placeat velit
          esse itaque mollitia eaque, minus provident sed labore exercitationem!
          Odit, culpa adipisci.
        </div>

        <div className="col-12 col-md-6 alert alert-secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero omnis
          eius blanditiis reiciendis repellendus labore, quos cupiditate commodi
          deleniti eveniet cumque dolorum nemo magni quam odit harum eligendi,
          laudantium culpa, necessitatibus neque unde dolorem beatae quaerat ut.
          Hic officiis recusandae ipsam quas quos est, earum voluptates repellat
          incidunt, quo modi nulla dolor vero eum consectetur. Quo cum quia
          praesentium, ab esse odio illum. Porro nam veritatis, dolores ducimus
          expedita voluptate explicabo sequi officiis facere odio alias labore
          fuga cumque aperiam facilis excepturi. Qui ad ipsum nemo placeat velit
          esse itaque mollitia eaque, minus provident sed labore exercitationem!
          Odit, culpa adipisci.
        </div>
      </div>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className="alert alert-danger">
        Normal Bootstrap : Lorem ipsum dolor sit amet consectetur,{" "}
      </div>
      <Alert variant="danger">
        React Bootstrap : Lorem, ipsum dolor sit amet consectetur adipisicing
        elit.
      </Alert>

      <span className="badge bg-secondary">Notifications.</span>
      <Badge bg="secondary">Notifications</Badge>
    </div>
  );
}

export default App;
