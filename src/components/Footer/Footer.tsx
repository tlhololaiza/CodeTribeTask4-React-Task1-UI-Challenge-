import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section - Image */}
        <div className="footer-section footer-image">
          <img src="/src/assets/images/footer_cupcakes.jpeg" alt="Cupcakes"/>
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
            <a href="#"><img src="/src/assets/icons/facebook.png" id="icon"/></a>
            <a href="#"><img src="/src/assets/icons/instagram.png" id="icon"/></a>
            <a href="#"><img src="/src/assets/icons/pinterest.png" id="icon"/></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
