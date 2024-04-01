
import HeroSlider from "../components/UI/HeroSlider.jsx"
import Helmet from "../components/Helmet/Helmet.jsx"


const Home = () => {
  return (
    <Helmet title = 'Home'>
      <section className="p-0 hero__slider-section">
        <HeroSlider/>
      </section>
    </Helmet>
  )
}

export default Home
