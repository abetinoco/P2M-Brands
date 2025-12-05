import './CallToAction.css'

const CallToAction = () => {
  return (
    <section className="cta">
      <div className="wave-divider wave-top">
        <img src="/divider 2.png" alt="" style={{display: 'block', width: '100%'}} />
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
