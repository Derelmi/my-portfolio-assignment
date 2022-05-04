import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Row,Col} from 'react-bootstrap';
import Header from './components/Header';
import Home from './components/Home';
import Education from './components/Education';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Education />
    </div>
    
  );
}

export default App;
