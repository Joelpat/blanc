import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './component/layout.js';
import Home from './component/home.js';
import Service from './component/service.js';
import Nopage from './component/nopage.js';
import About from './component/about.js';
import Contact from './component/contact.js';
 
 function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='service' element={<Service />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<Nopage></Nopage>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
  
}

export default App;
