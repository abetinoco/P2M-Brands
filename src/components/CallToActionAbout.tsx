import divider2 from '../assets/images/divider-2.webp'
import funkawayLogo from '../assets/images/funkaway.webp'
import gentledonLogo from '../assets/images/gentledon.webp'
import './CallToActionAbout.css'

const CallToActionAbout = () => {
  return (
    <section className="cta cta-about">
      <div className="wave-divider wave-top">
        <img
          src={divider2}
          alt=""
          style={{ display: 'block', width: '100%' }}
          loading="lazy"
          decoding="async"
        />
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
            <a href="https://funkaway.com" target="_blank" rel="noopener noreferrer">
              <img
                src={funkawayLogo}
                alt="FunkAway"
                className="cta-about-logo"
                loading="lazy"
                decoding="async"
              />
            </a>
            <a href="https://gentledon.com" target="_blank" rel="noopener noreferrer">
              <img
                src={gentledonLogo}
                alt="Gentledon"
                className="cta-about-logo"
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

export default CallToActionAbout
