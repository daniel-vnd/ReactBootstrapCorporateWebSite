import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './assets/components/header/Header';
import Hero from './assets/components/hero/Hero';
import AboutUs from './assets/components/aboutUs/AboutUs';
import Services from './assets/components/services/Services';
import Works from './assets/components/works/Works';

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
      </main>
    </div>
  );
}

export default App;
