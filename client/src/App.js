import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home/home';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Registration } from './Components/Signin/signup/register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Hotels } from './Components/Hotels/hotels';
import { Flight } from './Components/Flight/flight';
import { Car } from './Components/Car/car';
import { Profile } from './Components/Car/Profile/profile';


function App() {
  return (
    <>
 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Registration/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/hotels' element={<Hotels/>}/>
      <Route path='/flight' element={<Flight/>}/>
      <Route path='/car' element={<Car/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
