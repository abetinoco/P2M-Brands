import carImage from '../assets/images/car.webp'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span>WE ARE NOT</span>
            <span>YOUR PARENTS</span>
            <span>BRANDS!</span>
          </h1>
          <p className="hero-subtitle">
            Crafted<br />
            <span className="hero-subtitle-small">with Care</span>
          </p>
        </div>
        <div className="hero-image">
          <div className="car-container">
            <div className="nascar-bg" aria-hidden="true"></div>
            <img
              src={carImage}
              alt="P2M Brands race car"
              className="car-image-asset"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
