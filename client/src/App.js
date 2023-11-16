import "./App.css";
import ChangePin from "./pages/ChangePin.js";
import LoginPage from "./pages/LoginPage.js";
import MainPage from "./pages/MainPage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/changePin" element={<ChangePin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
