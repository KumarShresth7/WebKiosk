import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import MainPage from './Components/MainPage/MainPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
          <Route path='/main'element={<MainPage/>}/>
    
      
      </Routes>
      
      </BrowserRouter>
      
    </div>


  );
}

export default App;
