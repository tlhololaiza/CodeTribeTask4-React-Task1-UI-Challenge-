import './Footer.css';
import pic_1 from '../../assets/images/footer_cupcakes.jpeg';
import pic_2 from '../../assets/icons/facebook.png';
import pic_3 from '../../assets/icons/instagram.png';
import pic_4 from '../../assets/icons/pinterest.png';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: image */}
        <div className="footer-col footer-image">
          <img src={pic_1} alt="Cupcakes" />
        </div>

        {/* Middle: hearts + small info */}
        <div className="footer-col footer-info">
          <h4 className="footer-script">Join</h4>
          <p className="footer-sub">sweet couture flavors & traditional delicate fine</p>
          <div className="hearts" aria-hidden>
            <span>❤</span>
            <span>♡</span>
            <span>❤</span>
          </div>
          <div className="info-points">
            <div className="point">
              <span className="point-heart">❤</span>
              <p>Special cupcakes</p>
              <small>small flavors</small>
            </div>
            <div className="point">
              <span className="point-heart">❤</span>
              <p>Chocolate ones</p>
              <small>love deluxe</small>
            </div>
          </div>
        </div>

        {/* Right: social icons */}
        <div className="footer-col footer-social">
          <h4 className="footer-script">Follow Us Here</h4>
          <div className="social-icons">
            <a href="#" className="social-pill" aria-label="Facebook"><img src={pic_2} alt="Facebook" /></a>
            <a href="#" className="social-pill" aria-label="Instagram"><img src={pic_3} alt="Instagram" /></a>
            <a href="#" className="social-pill" aria-label="Pinterest"><img src={pic_4} alt="Pinterest" /></a>
          </div>
          <p className="social-caption">sweetness lives in one conversation</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
