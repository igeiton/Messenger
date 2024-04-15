import { TextField } from '@mui/material';
import { useState } from 'react';
import InputProps from './InputProps';
import CustomButton from '../Components/CustomButton';

export default function RegForm({ handleSubmit, register }: any) {
    const [passwordType, setPasswordType] = useState('password');
    const [confirmPasswordType, setConfirmPasswordType] = useState('password');

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-[15px]">
            <TextField label="Email" {...register('email')} />

            <TextField label="Name" {...register('name')} />

            <TextField
                label="Password"
                {...register('password')}
                type={passwordType}
                InputProps={{
                    endAdornment: (
                        <InputProps
                            setType={setPasswordType}
                            type={passwordType}
                        />
                    ),
                }}
            />

            <TextField
                label="Confirm password"
                {...register('confirmPassword')}
                type={confirmPasswordType}
                InputProps={{
                    endAdornment: (
                        <InputProps
                            setType={setConfirmPasswordType}
                            type={confirmPasswordType}
                        />
                    ),
                }}
            />

            <CustomButton>Sign Up</CustomButton>
        </form>
    );
}
