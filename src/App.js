
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Details from './components/Details';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div >
      <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/productdetail/:id' element={<Details/>}></Route>

      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
