import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Social = () => {
    return ( 
    <div class="social-container">
      <h3><u>Social Media</u></h3>
      <a href="https://www.facebook.com/ccksmuseum/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
    </div>
     );
}
 
export default Social;