import './About.css'

const About = () => {
  return (
    <section className="about">
      <div className="about-grid">
        <div className="about-left">
          <p className="about-script">Here's Something</p>
          <h2 className="about-heading">
            <span>ABOUT</span>
            <span>P2M</span>
          </h2>
        </div>
        <div className="about-right">
          <p className="about-text">
            At P2M Brands, we specialize in building agile, consumer-centric brands that meet real-world needs with speed, precision, and purpose. Founded by Kyle Bolke, P2M Brands was born from a passion for innovation in product development and a deep-rooted background in manufacturing. With a legacy tied to Visual Pak, a leading contract manufacturing and packaging company run by the Bolke family, Kyle brings decades of operational know-how and a keen understanding of what it takes to bring great products to market efficiently and at scale.
          </p>

          <p className="about-text">
            At our core, we believe in Product to Market (P2M) — a philosophy that prioritizes fast execution, customer insight, and operational excellence. Whether launching a new brand or revitalizing an existing one, we take a hands-on approach that blends entrepreneurial creativity with disciplined supply chain management. P2M Brands is redefining what it means to go from Product to Market.
          </p>

          <p className="about-text">
            We're not just launching products — we're creating impact.
          </p>

          <a href="#contact" className="about-cta-button">JOIN THE FAMILY</a>
        </div>
      </div>
    </section>
  )
}

export default About
