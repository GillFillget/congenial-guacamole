import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="footer-container">
        <div class="social-container">
          <h3><u>Social Media</u></h3>
          <a href="https://www.facebook.com/ccksmuseum/" className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          </div>  
        <div>
            <p>Hours: Tues - Sun. 1-5 pm</p>
            <p>(785) 632-3786 </p>
            <p>ccmuseum@twinvalley.net</p>
        </div>
        <div>
            <p>Our Address:</p>
            <p>518 Lincoln Ave</p>
            <p>Clay Center, KS 67432</p>
        </div>
        </div>
     );
}
 
export default Footer;