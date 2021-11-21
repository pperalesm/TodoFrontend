import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="Header">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            ToDo
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <NavDropdown title="Things">
                <NavDropdown.Item as={Link} to="/todo">
                  Todo List
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
