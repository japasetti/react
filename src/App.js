import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import EmployeeList from './components/EmployeeList';
import OurServices from './components/OurServices';
import Engines from './components/Engines';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddEmp from './components/AddEmp';
import Footer from './components/Footer';
import AddEngine from './components/AddEngine';

function App() {
  return (
    <>
      <Navbar />
      <Routes>    
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/emp" element={<EmployeeList />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/add-emp" element={<AddEmp />} />
        <Route path="/edit-emp/:id" element={<AddEmp />}/>
        <Route path="/engines" element={<Engines />} />
        <Route path="/add-eng" element={<AddEngine/>}/>
        <Route path="/edit-eng/:id" element={<AddEngine/>}/>
      </Routes>
      <Footer/>
      </>
  );
}

export default App;
