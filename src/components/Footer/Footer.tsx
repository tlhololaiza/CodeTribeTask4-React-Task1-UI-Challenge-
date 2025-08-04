import './Footer.css';
import picture_1 from '../../assets/images/footer_cupcakes.jpeg';
import picture_2 from '../../assets/icons/facebook.png';
import picture_3 from '../../assets/icons/instagram.png';
import picture_4 from '../../assets/icons/pinterest.png';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section - Image */}
        <div className="footer-section footer-image">
          <img src={picture_1} alt="Cupcakes"/>
        </div>

        {/* Middle Section - Info */}
        <div className="footer-section footer-info">
          <h4>Join</h4>
          <p>Subscribe for sweet rewards & updates on new flavors</p>
          
          <div className="info-links">
            <p>Email: hello@patisserie.com</p>
            <p>Call: +123 456 7890</p>
          </div>
        </div>

        {/* Right Section - Social Links */}
        <div className="footer-section footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><img src={picture_2} id="icon"/></a>
            <a href="#"><img src={picture_3} id="icon"/></a>
            <a href="#"><img src={picture_4} id="icon"/></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
