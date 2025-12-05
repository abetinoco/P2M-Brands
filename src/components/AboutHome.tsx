import './AboutHome.css'

const AboutHome = () => {
  return (
    <section className="about-home">
      <div className="about-home-panel">
        <div className="about-home-container">
          <div className="about-home-content">
            <p className="about-home-text">
              "We started small, with just a handful of bright ideas and a big dream to make
              <br className="about-break-desktop" />
              them real. Like builders with a blueprint, we crafted each brand with care, making
              <br className="about-break-desktop" />
              sure each one was special."
            </p>

            <p className="about-home-text">
              "We watched them grow, cheering them on as they found their place in the world.
              <br className="about-break-desktop" />
              Join us on this thrilling adventure!"
            </p>

            <div className="signature">
              <div className="signature-name">Kyle Bolke</div>
              <div className="signature-title">Founder/President</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHome
