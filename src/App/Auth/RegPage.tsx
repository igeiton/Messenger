import { Box, Typography } from '@mui/material';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useCreateUserMutation, useTakeUsersQuery } from '../Store/authApi';
import { useAppSelector } from '../Store/store';

import CustomLink from './Components/CustomLink';
import Snacks from './Components/Snacks';
import { tryReg } from './Components/validate';
import RegForm from './Form/Reg';

export type IndexProps = { [index: string]: any };
export type UserRegistration = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export default function RegPage() {
    const navigate = useNavigate();

    const { isAuth } = useAppSelector((state) => state.auth);
    const [addNewUser] = useCreateUserMutation();
    const { data = [] } = useTakeUsersQuery('');

    const { register, handleSubmit } = useForm<UserRegistration>();
    const [error, setError] = useState('');

    const handleFetchSubmit = (user: IndexProps) => {
        const isValide = tryReg(user, data);

        if (isValide == true) {
            addNewUser({
                name: user.name,
                email: user.email,
                password: user.password,
            });
            return navigate('/auth', { replace: true });
        }

        setError(isValide);
    };

    useEffect(() => {
        if (isAuth) {
            navigate('/', { replace: true });
        }
    }, [isAuth]);

    return (
        <>
            <Snacks error={error} setError={setError} />

            <Box className="boxAuth">
                <Typography variant="h6" component="h1">
                    Registration
                </Typography>

                <RegForm
                    handleSubmit={handleSubmit((user) =>
                        handleFetchSubmit(user)
                    )}
                    register={register}
                    buttonText="Sign Up"
                />

                <CustomLink to={'/auth'}>Log In</CustomLink>
            </Box>
        </>
    );
}
