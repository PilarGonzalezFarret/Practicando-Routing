import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path= "/" element={<Home/>} >Home  </Route>
          <Route path= "/about"element={<About/>} >About</Route>
        </Routes>
      </div>
    </BrowserRouter>  
  );
}

export default App;
