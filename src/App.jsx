import './App.css'
import Advantages from './Components/Advantages/Advantages'
import Agent from './Components/Agent/Agent'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Testimonials from './Components/Header/Testimonials'
import Listing from './Components/Listing/Listing'
import Location from './Components/Location/Location'
import Map from './Components/Map/Map'
import Nav from './Components/Nav/Nav'
function App() {
  return (
    <>
      <Nav />
      <Header />
      <Testimonials />
      <Advantages />
      <Location />
      <Listing />
      <Banner />
      <Agent />
      <Map />
      <Footer />
    </>
  )
}
export default App
