import { Link } from "react-router-dom";
import logo from "./Photos/Logo2.webp"
//import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
    return ( 
<nav className="navbar">
    <div className="logo">
        <img src={ logo } alt="Clay County Kansas Historical Society Logo" className="mainLogo"/>
    </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to={{ pathname: "https://www.claycomuseum.com/events" }}>Events</Link>
        <Link to={{ pathname: "https://www.claycomuseum.com/timeline" }}>County History</Link>
        <Link to={{ pathname: "https://www.claycomuseum.com/genealogy-and-research" }}>What Do We Offer</Link>
        <Link to={{ pathname: "https://www.claycomuseum.com/staff" }}>About</Link>
        <Link to={{ pathname: "https://www.claycomuseum.com/contact" }}>Contact</Link>
        <Link to={{ pathname: "https://www.claycomuseum.com/volunteer" }}>Volunteer</Link>
        <Link to={{ pathname: "https://www.claycomuseum.com/donate" }}>Donate</Link>
        </div>
    </nav>
     );
}
 
export default Navigation;