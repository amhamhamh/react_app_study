import React from 'react';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
//HashRouter랑 Home삭제됨
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';


//exact={} 속성은 정확히 저기 일때만 실행되게
function App(){
return (
  <div className="App">
    <Router>
      <Navigation/>
      <Routes>      
      <Route path="/" element={<Home />}></Route>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/movie-detail" element={<Detail/>}></Route>
      </Routes>
    </Router>
  </div>  
);
}

export default App;
