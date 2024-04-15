import { Button } from '@mui/material';

type CustomButtonProps = {
    children: string;
};

export default function CustomButton({ children }: CustomButtonProps) {
    return (
        <Button
            type="submit"
            sx={{
                width: '100%',
                // backgroundColor: '#000',
                // border: '1px solid black',
                // '&:hover': {
                //     color: '#000',
                //     backgroundColor: 'inherit',
                // },
            }}
            variant="contained"
        >
            {children}
        </Button>
    );
}
