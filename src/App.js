import './App.css'; 
import '../src/Login/Login.css'
import Login from '../src/Login/Login';
import Inicio from './Inicio/Inicio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route exact  path="/" element={<Login />}/>
          <Route exact  path="/inicio" element={<Inicio />}/>
        </Routes>
      
    </div>
  );
}

export default App;
