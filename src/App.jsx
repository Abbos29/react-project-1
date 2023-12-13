import './Reset.css'
import './App.scss';

import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import News from './pages/News';





const App = () => {
  return (
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/catalog' element={<Catalog/>}/>
     <Route path='/news' element={<News/>}/>

    </Routes>
  );
};

export default App;