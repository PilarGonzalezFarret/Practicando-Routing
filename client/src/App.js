import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <h1>Hola</h1>
      <p>
        <Link to= "/">Home </Link>
        <Link to= "/about">About</Link>
      </p>
    </BrowserRouter>  
  );
}

export default App;
