import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';

export const Logo = () => {
    const navigate = useNavigate();

    return (
        <Box
            display='flex'
            justifyContent='start'
            flexDirection='column'
            alignItems='start'
            mb='72px'
        >
            <Button
                color='secondary'
                sx={{ padding: '0px' }}
                onClick={() => navigate('/')}
            >
                <Typography
                    variant='h3'
                    fontSize='36px'
                    lineHeight='54px'
                    fontWeight='fontWeightBold'
                >
                    OutCode
                </Typography>
            </Button>
            <Typography
                variant='body1'
                component='h5'
                color='primary'
                fontSize='16px'
                lineHeight='24.8px'
                fontWeight='fontWeightMedium'
            >
                Freelance
            </Typography>
        </Box>
    );
};
