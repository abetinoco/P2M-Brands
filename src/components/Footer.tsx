import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Stay in<br />Touch</h3>
            <div className="newsletter">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
              />
              <button className="btn btn-yellow newsletter-btn">SUBMIT</button>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">LEARN MORE</h4>
            <ul className="footer-links">
              <li><a href="#about">ABOUT P2M BRANDS</a></li>
              <li><a href="#team">MEET THE TEAM</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">CONTACT DETAILS</h4>
            <ul className="footer-links">
              <li><a href="mailto:HELLO@P2MBRANDS.COM">HELLO@P2MBRANDS.COM</a></li>
              <li><a href="tel:9496007766">PHONE: 949.600.7766</a></li>
              <li>28355 N. Bradley Road Lake Forest, IL 60045</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-logo">
            <img src="/Logo.svg" alt="P2M Brands" className="footer-logo-image" />
          </div>
          <p className="footer-copyright">© Copyright 2025 | P2M Brands. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
