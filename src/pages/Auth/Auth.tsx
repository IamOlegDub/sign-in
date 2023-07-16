import { useParams } from 'react-router-dom';
import { FormLink } from '../../components/FormLink';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { SignIn } from '../../components/SignIn';
import { SignUp } from '../../components/SignUp';
import { SIGNIN, SIGNUP } from '../../paths';

export const Auth = () => {
    let { authId } = useParams();

    const text =
        authId === 'login'
            ? 'Don’t have account yet?'
            : authId === 'register'
            ? 'I have an account.'
            : '';

    const linkText =
        authId === 'login'
            ? 'New Account'
            : authId === 'register'
            ? 'Go to Sign in'
            : '';

    const signAction =
        authId === 'login' ? SIGNUP : authId === 'register' ? SIGNIN : '';

    return (
        <Box
            display='flex'
            justifyContent='start'
            flexDirection='column'
            alignItems='center'
            mb='48px'
        >
            <Typography
                variant='h1'
                fontSize='56px'
                lineHeight='84px'
                fontWeight='fontWeightBold'
                letterSpacing='3%'
            >
                SIGN
                {authId === 'login' && ' IN'}
                {authId === 'register' && ' UP'}
            </Typography>
            {authId === 'login' && <SignIn />}
            {authId === 'register' && <SignUp />}
            <FormLink text={text} linkText={linkText} signAction={signAction} />
        </Box>
    );
};
