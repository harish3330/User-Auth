import logo from './logo.svg';
import './App.css';
import Loginpage from './Pages/Loginpage';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Adminpage from './Pages/Adminpage';
import Products from './Pages/Products';
import Userpage from './Pages/Userpage';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loginpage/>}/>
        <Route path='Admin' element={<Adminpage/>}/>
        <Route path = 'Products' element={<Products/>}/>
        <Route path = 'User' element={<Userpage/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
