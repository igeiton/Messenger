import { TextField } from '@mui/material';
import { useState } from 'react';
import InputProps from './InputProps';
import CustomButton from '../Components/CustomButton';

export default function AuthForm({ handleSubmit, register }: any) {
    const [passwordType, setPasswordType] = useState('password');

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-[15px]">
            <TextField label="Name / Email" {...register('nameOrEmail')} />

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

            <CustomButton>Sign In</CustomButton>
        </form>
    );
}
