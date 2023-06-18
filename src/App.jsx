import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashbord  from './Components/Dashbord'
import About from "./Components/Routes/About";
import Contact from './Components/Routes/Contact';
import Footer from "./Components/Footer";
function App() {

  return (
    <div className="bg-white">
      <Router>
        <Routes>
          <Route path="/blog" element={<Dashbord />} />
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}


export default App
