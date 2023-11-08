import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Student from './pages/student';
import Login from './pages/Login';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';
import Cours from './pages/cours'



function App() {
  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then (() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = "/login"
    })
  }
  return (

    <Router>
      <nav>
        <Link to="/">Home</Link>
        {!isAuth ? (<Link to="/login">Login</Link>) : (<><Link to="/student">Student Dashboard</Link><button onClick={signUserOut}>Log Out</button></>)}
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cours' element={<Cours />} />
        <Route path='/student' element={<Student isAuth={isAuth} />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  )
}

export default App;
