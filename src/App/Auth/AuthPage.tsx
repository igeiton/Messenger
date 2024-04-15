import { Box, Typography } from '@mui/material';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useTakeUsersQuery } from '../Store/authApi';

import { login } from '../Store/authSlice';
import { useAppDispatch, useAppSelector } from '../Store/store';
import CustomLink from './Components/CustomLink';
import Snacks from './Components/Snacks';
import { tryAuth } from './Components/validate';
import AuthForm from './Form/Auth';

type User = {
    name: string;
    password: string;
};

export default function AuthPage() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { register, handleSubmit } = useForm<User>();
    const [error, setError] = useState('');

    const { isAuth } = useAppSelector((state) => state.auth);
    const { data = [] } = useTakeUsersQuery('');

    const handleDispatch = (user: User) => {
        const isValide = tryAuth(user, data);

        if (isValide === true) {
            dispatch(login({ isAuth: true }));
            navigate('/', { replace: true });
        } else {
            setError(isValide);
        }
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
                    Authorization
                </Typography>

                <AuthForm
                    handleSubmit={handleSubmit((user) => handleDispatch(user))}
                    register={register}
                />

                <CustomLink to={'/reg'}>Register</CustomLink>
            </Box>
        </>
    );
}
