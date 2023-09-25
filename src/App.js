import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resetpassword from './pages/Resetpassword';
import MainLayout from './components/MainLayout';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<login />}/>
      <Route path="/reset-password" element={<Resetpassword />}/>
      <Route path="/forgot-password" element={<forgotPassword />}/>
      <Route path="/admin" element={<MainLayout />}>
        <Route index element={<dashboard />}/>
      </Route>
    </Routes>
   </Router>
  );
}

export default App;
 