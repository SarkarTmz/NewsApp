import {Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/header-page/Home';
import Breaking from './pages/header-page/Breaking';
import Contact from './pages/header-page/Contact';

import Footer from './components/Footer'
import Sport from './pages/category-page/Sport';
import Business from './pages/category-page/Business';
import Science from "./pages/category-page/Science"
import Social from "./pages/category-page/Social"
import Entertainment from "./pages/category-page/Entertainment"
import Education from './pages/category-page/Education';
import Addnews from './pages/header-page/Addnews';

import Details from './pages/Details';
import Single from './pages/Single';

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
          <Route path='/single/:id' element={<Single/>}/>
          <Route path='/details/:article_id' element={<Details/>}/>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
