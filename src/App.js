import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './assets/components/header/Header';
import Hero from './assets/components/hero/Hero';
import AboutUs from './assets/components/aboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <header id="header">
        <Header />
      </header>
      <main>
        <Hero />
        <AboutUs />
      </main>
    </div>
  );
}

export default App;
