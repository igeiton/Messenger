import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';

type InputPropsProps = {
    type: string;
    setType: (type: string) => void;
};

export default function InputProps({ type, setType }: InputPropsProps) {
    return (
        <InputAdornment sx={{ cursor: 'pointer' }} position="start">
            {type == 'password' ? (
                <Visibility onClick={() => setType('text')} />
            ) : (
                <VisibilityOff onClick={() => setType('password')} />
            )}
        </InputAdornment>
    );
}
