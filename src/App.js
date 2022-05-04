import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Row,Col} from 'react-bootstrap';
import Header from './components/Header';
import Home from './components/Home';
import Education from './components/Education';
import Skills from './components/Skills';
import Images from './components/Images';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Education />
      <Skills />
      <Images />
      <Contact />
    </div>
    
  );
}

export default App;
