import { Button } from '@mui/material';

type Props = {
    children: string;
};
export const MainButton = ({ children }: Props) => {
    return (
        <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            sx={{ borderRadius: 0, marginTop: '24px' }}
        >
            {children}
        </Button>
    );
};
