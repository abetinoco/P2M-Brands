import Hero from '../components/Hero'
import AboutHome from '../components/AboutHome'
import Brands from '../components/Brands'
import CallToAction from '../components/CallToAction'
import Passion from '../components/Passion'
import divider1 from '../assets/images/divider-1.webp'

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="section-divider">
        <img
          src={divider1}
          alt=""
          className="section-divider-image"
          loading="lazy"
          decoding="async"
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
