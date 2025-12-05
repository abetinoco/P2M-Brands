import './CallToActionAbout.css'

const CallToActionAbout = () => {
  return (
    <section className="cta cta-about">
      <div className="wave-divider wave-top">
        <img src="/divider 2.png" alt="" style={{display: 'block', width: '100%'}} />
      </div>
      
      <div className="cta-about-inner">
        <div className="cta-about-left">
          <h2 className="cta-about-heading">
            <span className="cta-about-line1">Join the</span>
            <span className="cta-about-line2">Family</span>
          </h2>
        </div>
        
        <div className="cta-about-right">
          <div className="cta-about-logos">
            <img src="/funkaway.png" alt="FunkAway" className="cta-about-logo" />
            <img src="/gentledon.png" alt="Gentledon" className="cta-about-logo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToActionAbout
