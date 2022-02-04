import './components/navbar/navbar.css';
import './components/header/header.css';
import './components/main-page/main-page.css';
import './components/footer/footer.css';
import './components/main-page/main-page.css';
import './components/contact/contact.css';
import './App.css';
import './index.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import MainPage from './components/main-page/MainPage';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      <BrowserRouter>
      
      <Routes>
        <Route
          path="/"
          element={<>  <Header></Header><MainPage></MainPage></>
          
          }
        />
        
        <Route path="/kontakt" element={<Contact></Contact>} />
      </Routes>
    </BrowserRouter>
        <Footer></Footer>

        

      </div>
      
    </div>
  );
}

export default App;
