import './Header.css'

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
        <span className="cart" aria-label="Cart" role="img">🛒</span>
        <button className="order-btn">ORDER ONLINE NOW</button>
      </div>
    </nav>
  )
}

export default Header
