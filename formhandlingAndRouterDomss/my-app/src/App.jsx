import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';


function App() {
  return (
   
  <>
     {/* <h1>Formhandling</h1> */}
     {/* <Register/> */}
     {/* <Login/> */}
     <h1>Main Component</h1>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Register/>}/>
    <Route path='/about'element={<About/>}/>
  
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
