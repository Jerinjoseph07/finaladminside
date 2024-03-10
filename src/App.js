
import './App.css';
import Home from './admin/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Adminlog from './admin/Adminlog';
import Clientdetails from './admin/Clientdetails';
import Workerdetails from './admin/Workerdetails';
import Workeredit from './admin/Workeredit';

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
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
