import './App.css';
import { Route, Routes } from 'react-router-dom';
import TrangChu4 from './pages/trang_chu_4';

import './style.css';



function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<TrangChu4/>}/>
      </Routes>

    </>
  );
}

export default App;

