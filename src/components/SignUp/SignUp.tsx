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
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { selectIsLoading, selectUser, signUp } from '../../slices/authSlice';
import { useAppDispatch } from '../../store';
import { SignUpFormData } from '../../types';
import { MainButton } from '../MainButton';

export const SignUp = () => {
    const user = useSelector(selectUser);
    const isLoading = useSelector(selectIsLoading);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const dispatch = useAppDispatch();

    const handleTogglePasswordVisibility = (): void => {
        setShowPassword((show) => !show);
    };

    const handleToggleConfirmPasswordVisibility = (): void => {
        setShowConfirmPassword((show) => !show);
    };

    const onSubmit = (data: SignUpFormData): void => {
        dispatch(signUp(data));
    };

    const schema = yup.object().shape({
        name: yup.string().required('Your name is required'),
        email: yup
            .string()
            .email('Enter valid email')
            .required('Your email is required'),
        password: yup
            .string()
            .required('Your password is required')
            .min(6, 'The password must be more than 6 digits')
            .max(20, 'The password must be less than 02 digits'),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password')], 'Enter the same password')
            .required('Confirm your password'),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpFormData>({
        resolver: yupResolver(schema),
    });

    if (isLoading) return <CircularProgress />;

    if (user) return <Navigate to='/' />;

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '438px' }}>
            <TextField
                {...register('name')}
                label='Name'
                variant='standard'
                margin='normal'
                fullWidth
                color='secondary'
                error={!!errors.name?.message}
                helperText={errors.name?.message}
            />
            <TextField
                {...register('email')}
                label='Email'
                variant='standard'
                margin='normal'
                color='secondary'
                fullWidth
                error={!!errors.email?.message}
                helperText={errors.email?.message}
            />
            <TextField
                {...register('password')}
                label='Password'
                type={showPassword ? 'text' : 'password'}
                variant='standard'
                margin='normal'
                color='secondary'
                fullWidth
                error={!!errors.password?.message}
                helperText={errors.password?.message}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton
                                onClick={handleTogglePasswordVisibility}
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
            <TextField
                {...register('confirmPassword')}
                label='Confirm Password'
                type={showConfirmPassword ? 'text' : 'password'}
                variant='standard'
                margin='normal'
                color='secondary'
                fullWidth
                error={!!errors.confirmPassword?.message}
                helperText={errors.confirmPassword?.message}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton
                                onClick={handleToggleConfirmPasswordVisibility}
                                color='secondary'
                            >
                                {showConfirmPassword ? (
                                    <VisibilityOff />
                                ) : (
                                    <Visibility />
                                )}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <MainButton>Sign Up</MainButton>
        </form>
    );
};
