import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './assets/components/header/Header';
import Hero from './assets/components/hero/Hero';
import AboutUs from './assets/components/aboutUs/AboutUs';
import Services from './assets/components/services/Services';
import Works from './assets/components/works/Works';
import OurTeams from './assets/components/outTeams/OurTeams';
import Testimonials from './assets/components/testimonials/Testimonials';
import Pricing from './assets/components/pricing/Pricing';

function App() {
  return (
    <div className="App">
      <header id="header">
        <Header />
      </header>
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Works />
        <OurTeams />
        <Testimonials />
        <Pricing />
      </main>
    </div>
  );
}

export default App;
