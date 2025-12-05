import Hero from '../components/Hero'
import AboutHome from '../components/AboutHome'
import Brands from '../components/Brands'
import CallToAction from '../components/CallToAction'
import Passion from '../components/Passion'

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="section-divider">
        <img
          src="/divider 1.png"
          alt=""
          className="section-divider-image"
        />
      </div>
      <AboutHome />
      <Brands />
      <CallToAction />
      <Passion />
    </>
  )
}

export default HomePage
