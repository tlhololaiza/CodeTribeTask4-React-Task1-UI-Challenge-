import './Hero.css';
import starIcon from '../../assets/icons/star.png'

const Hero = () => {
  return (
    <section className="hero">
      <img src={starIcon} alt="Patisserie" className="hero-logo" />
      <h1>Delight in</h1>
      <p className="hero-sub">PATISSERIE IN EVERY BITE!</p>
      <button className="hero-btn">ORDER NOW</button>
    </section>
  )
}

export default Hero
