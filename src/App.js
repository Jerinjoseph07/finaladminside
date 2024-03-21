
import './App.css';
import Home from './admin/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Adminlog from './admin/Adminlog';
import Clientdetails from './admin/Clientdetails';
import Workerdetails from './admin/Workerdetails';
import Workeredit from './admin/Workeredit';
import Booking from './admin/Booking';
import Workview from './admin/Workview';

function App() {
  return (
    <div>
      <BrowserRouter>
  <Routes>
   <Route path='/' element={<Adminlog method='post' />}></Route>
   <Route path='/home' element={<Home method='post' />}></Route>
   <Route path='/cdetails' element={<Clientdetails method='get' />}></Route>
   <Route path='/w' element={<Workerdetails method='get' />}></Route>
   <Route path='/wedit' element={<Workeredit method='post' />}></Route>
   <Route path='/booking' element={<Booking method='get' />}></Route>
   <Route path='/workview' element={<Workview method='get' />}></Route>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
