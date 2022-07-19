import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Registeration from './Pages/Registeration';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import Contact from './Pages/Contact'
import Appointment from './Pages/Appointment';
import GetApi from './Pages/GetApi';
import ApiDataTable from './Pages/ApiDataTable';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Registeration" element={<Registeration />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/getapi" element={<GetApi />}/>
        <Route path="/apidatatable" element={<ApiDataTable />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
