import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Countries from './Components/Countries/Countries';
import NotFound from './Components/NotFound/NotFound';
import CountryDetail from './Components/CountryDetail/CountryDetail';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/countries" element={<Countries></Countries>}></Route>
        <Route path="/country/:countryName" element={<CountryDetail></CountryDetail>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<NotFound></NotFound>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div >
  );
}

export default App;
