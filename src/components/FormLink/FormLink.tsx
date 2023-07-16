import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type Texts = {
    text: string;
    linkText: string;
    signAction: string;
};

export const FormLink = ({ text, linkText, signAction }: Texts) => {
    return (
        <Box
            display='flex'
            gap='6px'
            alignSelf='center'
            sx={{ opacity: '80%' }}
            marginTop='24px'
        >
            <Typography
                variant='body1'
                color='text.primary'
                fontSize='12px'
                lineHeight='18.6px'
                display='block'
            >
                {text}
            </Typography>
            <Link to={signAction} style={{ textDecoration: 'none' }}>
                <Typography
                    variant='body1'
                    color='text.secondary'
                    fontSize='12px'
                    lineHeight='18.6px'
                    display='block'
                >
                    {linkText}
                </Typography>
            </Link>
        </Box>
    );
};
