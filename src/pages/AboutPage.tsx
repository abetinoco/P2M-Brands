import About from '../components/About'
import CallToActionAbout from '../components/CallToActionAbout'
import carImage from '../assets/images/car.webp'
import divider1 from '../assets/images/divider-1.webp'
import './AboutPage.css'

const AboutPage = () => {
  return (
    <>
      {/* Hero Section - Custom for About page */}
      <section className="hero about-hero">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-subtitle">
              Brand<br />
              <span className="hero-subtitle-small">architects</span>
            </p>
            <h1 className="hero-title">
              <span>TURNING CRAFTY</span>
              <span>PRODUCTS INTO</span>
              <span>MARKET LEADERS</span>
            </h1>
            <p className="about-hero-subtext">
              Nestled in the heart of Libertyville, Illinois, our passion is to<br />create, invest in, and acquire brands with the potential to soar.
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
      
      <div className="section-divider">
        <img
          src={divider1}
          alt=""
          className="section-divider-image"
          loading="lazy"
          decoding="async"
        />
      </div>
      
      {/* About Section */}
      <About />
      
      {/* CTA Section */}
      <CallToActionAbout />
    </>
  )
}

export default AboutPage
