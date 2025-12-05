import './Brands.css'

const Brands = () => {
  return (
    <section className="brands">
      <div className="brands-container">
        <div className="brands-grid">
          <div className="brand-card">
            <img src="/funkaway.png" alt="Funkaway" className="brand-logo-img" />
          </div>
          <div className="brand-card">
            <img src="/gentledon.png" alt="Gentle Don" className="brand-logo-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brands
