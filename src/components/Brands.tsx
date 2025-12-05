import funkawayLogo from '../assets/images/funkaway.webp'
import gentledonLogo from '../assets/images/gentledon.webp'
import './Brands.css'

const Brands = () => {
  return (
    <section className="brands">
      <div className="brands-container">
        <div className="brands-grid">
          <div className="brand-card">
            <a href="https://funkaway.com" target="_blank" rel="noopener noreferrer">
              <img
                src={funkawayLogo}
                alt="Funkaway"
                className="brand-logo-img"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
          <div className="brand-card">
            <a href="https://gentledon.com" target="_blank" rel="noopener noreferrer">
              <img
                src={gentledonLogo}
                alt="Gentle Don"
                className="brand-logo-img"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brands
