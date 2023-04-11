import logo from "./Photos/Logo2.webp"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {

    return ( 
<nav className="navb">
<img src={ logo } alt="Clay County Kansas Historical Society Logo" className="mainLogo"/>
    <div className="links">
      <Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto links">
          <Nav.Link href="/" className="home">Home</Nav.Link>
          <Nav.Link href="https://www.claycomuseum.com/events">Events</Nav.Link>
          <Nav.Link href="https://www.claycomuseum.com/timeline">County History</Nav.Link>
          <Nav.Link href="https://www.claycomuseum.com/genealogy-and-research">What Do We Offer</Nav.Link>
          <Nav.Link href="https://www.claycomuseum.com/staff">About</Nav.Link>
          <Nav.Link href="https://www.claycomuseum.com/contact">Contact</Nav.Link>
          <Nav.Link href="https://www.claycomuseum.com/volunteer">Volunteer</Nav.Link>
          <Nav.Link href="https://www.claycomuseum.com/donate">Donate</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
        </div>
    </nav>
    
     );
}
 
export default Navigation;