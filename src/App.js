import React from 'react';
import {Button} from 'antd'
import FileUpload from './fileUpload/fileUpload';
import Register from './auth/register';
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './auth/login';
import { useAuth } from './auth/AuthContext'; 
import FileDisplay from './fileDisplay';

function App() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <>
      <h1>File Upload and Short Link Generation</h1>
      {isAuthenticated && <Button type='primary' className="logout" onClick={() => logout()}>Logout</Button>}
      <Router>
        <Routes>
          <Route path="/fileUpload" element={isAuthenticated ? <FileUpload /> : <Navigate to="/" />} />
          <Route path="/fileDisplay" element={isAuthenticated ? <FileDisplay /> : <Navigate to="/" />} />
          <Route path="/" element={isAuthenticated ? <Navigate to="/fileUpload" /> : <Register />} />
          <Route path="/login" element={isAuthenticated ? <Navigate to="/fileUpload" /> : <Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;