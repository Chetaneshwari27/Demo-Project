import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Container } from '@mui/material';
import store from './store/store';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Home from './pages/Home';
import backImage from './assets/background.webp'
import { ToastContainer } from 'react-toastify';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Provider store={store}>
      <Router>
        <div style={{
            backgroundImage: `url(${backImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            fontFamily: "'Caveat', cursive",
          }}>

        <Container>
          <Routes>
            {isAuthenticated ? (
              <>
                <Route path="/" element={<Home onLogout={handleLogout} />} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            ) : (
              <>
                <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
                <Route path="/register" element={<RegistrationForm onLogin={handleLogin} />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </>
            )}
          </Routes>
        </Container>
        </div>
        <ToastContainer/>
      </Router>
    </Provider>
  );
};

export default App;