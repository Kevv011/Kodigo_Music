import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//Paginas de navegacion
import {Home} from './pages/Home'
import {Signin} from './pages/Signin'

//Componentes
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'

function App() {

  return (
    
    //Navegacion con react-router-dom
    <BrowserRouter>
    <Navbar/>  {/* Componente del Navbar */}
      <Routes>

        <Route index path='/' element={<Home/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>

      </Routes>
      <Footer/> {/* Componente del Footer */}
    </BrowserRouter>
  )
}

export default App
