
import './App.css';
import AboutUs from './pages/aboute/aboutus';
import ArticelPage from './pages/articelPage/articelPage';
import CreateArticels from './pages/createArticels/createArticels';
 import Home from "./pages/home/Home" 
import{Route,Routes} from "react-router-dom"

function App() {
  return (
    <div>
     <Routes>
        <Route path='/' element={<Home /> }/>
        <Route path='/about' element={<AboutUs /> }/>
        <Route path='/articelPage/:id' element={<ArticelPage /> }/>
        <Route path='/createArticels' element={<CreateArticels /> }/>
     </Routes>
    </div>
  );
}

export default App;
