import {Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Breaking from './components/Breaking';
import Contact from './components/Contact';

import Footer from './components/Footer'
import Sport from './components/pages/Sport';
import Business from './components/pages/Business';
import Science from "./components/pages/Science"
import Social from "./components/pages/Social"
import Entertainment from "./components/pages/Entertainment"
import Education from './components/pages/Education';
import Details from './components/pages/Details';
import Addnews from './components/Addnews';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='addnews' element={<Addnews/>} />
          <Route path='breaking' element={<Breaking/>} />
          <Route path='contact' element={<Contact/>}/>
          <Route path='sport' element={<Sport/>}/>
          <Route path='business' element={<Business/>}/>
          <Route path='science' element={<Science/>}/>
          <Route path='social' element={<Social/>}/>
          <Route path='entertainment' element={<Entertainment/>}/>
          <Route path='education' element={<Education/>}/>
          <Route path='/details/:article_id' element={<Details/>}/>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
