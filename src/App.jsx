import Choose from "./components/Choose/Choose"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Pricing from "./components/Pricing/Pricing"
import Separator from "./components/Separator/Separator"
import Services from "./components/Services/Services"
import TeamSection from "./components/Team/Team"
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div >
      <Header />
      <Home />
      <Services/>
      <Separator/>
      <Pricing/>
      <Separator/>
      <Choose/>
      <Separator/>
      <TeamSection/>
      <Footer/>
    </div >
  )
}

export default App