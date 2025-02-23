import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './assets/components/Header';
import Hero from './assets/components/Hero';

function App() {
  return (
    <div className="App">
      <header id="header">
        <Header />
      </header>
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
