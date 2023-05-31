import './App.css';
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Create from './pages/Create';
import Post from './pages/Post';
import { UserContextProvider } from './context/UserContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Create />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
