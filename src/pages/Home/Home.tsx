import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { logOut, selectUser } from '../../slices/authSlice';
import { SIGNIN } from '../../paths';

export const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(selectUser);

    if (!user) return <Navigate to={SIGNIN} />;

    const handleLogOut = () => {
        dispatch(logOut());
        navigate(SIGNIN);
    };

    return (
        <Box>
            <Typography
                variant='h2'
                textAlign='center'
                sx={{ fontSize: '48px', lineHeight: '72px' }}
            >
                Congratulations
            </Typography>
            <Typography
                variant='body1'
                component='h5'
                sx={{ fontSize: '16px', lineHeight: '24.8px' }}
            >
                Now you are on the main page. There is nothing to do here except
                to click logout)
            </Typography>
            <Button
                variant='contained'
                color='primary'
                sx={{ borderRadius: 0, marginTop: '24px' }}
                onClick={handleLogOut}
            >
                Log Out
            </Button>
        </Box>
    );
};
