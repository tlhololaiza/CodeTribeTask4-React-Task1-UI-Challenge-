import './Header.css'

const Header = () => {
  return (
    <nav>
      
        <h2>Patisserie</h2>
        <div className='links'>
          <a href="/#" className='link'>Home</a>
          <a href="/#" className='link'>Menu</a>
          <a href="/#" className='link'>Cakes</a>
          <a href="/#" className='link'>Parties</a>
          <a href="/#" className='link'>Contacts</a>
          <button className='oder-btn'>ORDER NOW</button>
          
        </div>
      
    </nav>
  )
}

export default Header
