import Container from 'react-bootstrap/Container';
import './Posts.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './../logo/images.jpeg';


function Posts() {
  return (
    <div className='saad'>
      <Navbar  expand="lg">
      <Container>
        <Navbar.Brand  href="#Posts">
            <img src= {logo} alt=''   title='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Friends">Follow friends</Nav.Link>
            <Nav.Link href="#Comment">Add Post</Nav.Link>
            <NavDropdown title="Settings" id="basic-nav-dropdown">
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
  );
}

export default Posts;



