import { Alert, Snackbar } from '@mui/material';

type SnacksProps = {
    error: string;
    setError: (error: string) => void;
};

export default function Snacks({ error, setError }: SnacksProps) {
    if (!error) return null;

    return (
        <Snackbar
            open={!!error}
            autoHideDuration={3000}
            onClose={() => setError('')}
            message={error}
        >
            <Alert sx={{ width: '100%' }} severity="error">
                {error}
            </Alert>
        </Snackbar>
    );
}
