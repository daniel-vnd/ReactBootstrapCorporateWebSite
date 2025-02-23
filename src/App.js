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
import Blog from './assets/components/blog/Blog';
import Contact from './assets/components/contact/Contact';

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
        <Blog />
        <Contact />
      </main>
    </div>
  );
}

export default App;
