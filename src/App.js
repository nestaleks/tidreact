import {HashRouter as Router, Routes, Route, Link} from "react-router-dom";

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import Contacts from "./pages/contacts/contacts";
import Investments from "./pages/investments/investments";
import Services from "./pages/services/services";
import About from './pages/about/about';

import News from './pages/news/news';
import Gallery from './pages/gallery/gallery';


function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/investments" element={<Investments/>}></Route>
                <Route path="/services" element={<Services/>}></Route>
                <Route path="/contacts" element={<Contacts/>}></Route>
            </Routes>


            {/*<Gallery/>*/}
            {/*<News/>*/}
            <Footer/>
        </Router>
    </div>
  );
}

export default App;