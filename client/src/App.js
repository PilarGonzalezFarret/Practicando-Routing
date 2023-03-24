import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <h1>Hola</h1>
      <p>
        <link to= "/">Home</link>
        <link to= "/about">About</link>
      </p>
    </BrowserRouter>  
  );
}

export default App;
