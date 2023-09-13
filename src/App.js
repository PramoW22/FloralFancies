import logo from './logo.svg';
import './App.css';
import Navbar from './component/molecules/Navbar';
import NavItem from './component/atoms/NavItem';
import Home from './page/Home';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home/>}/> 
        
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
