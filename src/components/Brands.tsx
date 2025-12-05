import './Brands.css'

const Brands = () => {
  return (
    <section className="brands">
      <div className="brands-container">
        <div className="brands-grid">
          <div className="brand-card">
            <a href="https://funkaway.com" target="_blank" rel="noopener noreferrer">
              <img src="/funkaway.png" alt="Funkaway" className="brand-logo-img" />
            </a>
          </div>
          <div className="brand-card">
            <a href="https://gentledon.com" target="_blank" rel="noopener noreferrer">
              <img src="/gentledon.png" alt="Gentle Don" className="brand-logo-img" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brands
