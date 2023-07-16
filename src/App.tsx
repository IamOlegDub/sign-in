import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { firebaseConfig } from './firebase';
import { initializeApp } from 'firebase/app';
import Container from '@mui/material/Container';
import { Home } from './pages/Home';
import { Logo } from './components/Logo';
import { Auth } from './pages/Auth';
import { selectUser } from './slices/authSlice';
import { AUTH, HOME } from './paths';
import './App.css';

function App() {
    useEffect(() => {
        initializeApp(firebaseConfig);
    }, []);

    const user = useSelector(selectUser);

    return (
        <div className='App'>
            <Container
                sx={{
                    bgcolor: 'background.paper',
                    minHeight: '100vh',
                    color: 'text.primary',
                    padding: '48px',
                }}
                maxWidth={user ? 'lg' : 'xs'}
            >
                <Logo />
                <Routes>
                    <Route path={AUTH + '/:authId'} element={<Auth />} />
                    <Route path={HOME} element={<Home />} />
                </Routes>
            </Container>
        </div>
    );
}

export default App;
