import divider2 from '../assets/images/divider-2.webp'
import './CallToAction.css'

const CallToAction = () => {
  return (
    <section className="cta">
      <div className="wave-divider wave-top">
        <img
          src={divider2}
          alt=""
          style={{ display: 'block', width: '100%' }}
          loading="lazy"
          decoding="async"
        />
      </div>
      
      <div className="cta-inner">
        <div className="cta-card">
          <h2 className="cta-heading">Let's talk</h2>

          <p className="cta-text">
            Ready to elevate your brand? Reach<br />
            out and let's make magic happen<br />
            together!
          </p>

          <button className="cta-button">
            JOIN THE FAMILY
          </button>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
