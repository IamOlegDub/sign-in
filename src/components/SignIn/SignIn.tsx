import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
    CircularProgress,
    IconButton,
    InputAdornment,
    TextField,
} from '@mui/material';
import { VisibilityOff } from '@mui/icons-material';
import { Visibility } from '@mui/icons-material';
import { selectIsLoading, selectUser, signIn } from '../../slices/authSlice';
import { useAppDispatch } from '../../store';
import { SignInFormData } from '../../types';
import { MainButton } from '../MainButton';

export const SignIn = () => {
    const user = useSelector(selectUser);
    const isLoading = useSelector(selectIsLoading);

    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useAppDispatch();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const onSubmit = (data: SignInFormData) => {
        dispatch(signIn(data));
    };

    const { register, handleSubmit } = useForm<SignInFormData>();

    if (isLoading) return <CircularProgress />;

    if (user) return <Navigate to='/' />;

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '438px' }}>
            <TextField
                {...register('email')}
                label='Email'
                color='secondary'
                variant='standard'
                margin='normal'
                fullWidth
            />
            <TextField
                {...register('password')}
                label='Password'
                type={showPassword ? 'text' : 'password'}
                variant='standard'
                margin='normal'
                color='secondary'
                fullWidth
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton
                                onClick={handleClickShowPassword}
                                color='secondary'
                            >
                                {showPassword ? (
                                    <VisibilityOff />
                                ) : (
                                    <Visibility />
                                )}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <MainButton>Sign In</MainButton>
        </form>
    );
};
