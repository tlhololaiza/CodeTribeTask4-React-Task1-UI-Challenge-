import './Header.css'
import cartIcon from '../../assets/icons/white-cart.png'

const Header = () => {
  return (
    <nav className="nav">
      <div className="brand">Patisserie</div>

      <div className="links">
        <a href="/#" className="link">HOME</a>
        <a href="/#" className="link">BIEN</a>
        <a href="/#" className="link">CAKES</a>
        <a href="/#" className="link">PARTIES</a>
        <a href="/#" className="link">CONTACT</a>
      </div>

      <div className="actions">
        <img src={cartIcon} alt="Cart" className="cart" />
        <button className="order-btn">ORDER ONLINE NOW</button>
      </div>
    </nav>
  )
}

export default Header
