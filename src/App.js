import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resetpassword from './pages/Resetpassword';
import MainLayout from './components/MainLayout';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';


function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/sign-up" element={<Signup />}/>
      <Route path="/reset-password" element={<Resetpassword />}/>
      <Route path="/forgot-password" element={<Forgotpassword />}/>
      <Route path="/admin" element={<MainLayout />}>
        <Route index element={<Dashboard />}/>
      </Route>
    </Routes>
   </Router>
  );
}

export default App;
 