import { IndexProps } from '../RegPage';

export const tryReg = (user: IndexProps, data: IndexProps[]) => {
    for (let key in user) {
        if (user[key] === '') {
            return 'Fill all fields';
        }
    }

    for (let i = 0; i < data.length; i++) {
        if (user.email === data[i].email) {
            return 'Email already exist';
        }
    }

    if (user.password.length < 8) {
        return 'Password must be at least 8 characters';
    }

    if (user.password !== user.confirmPassword) {
        return 'Passwords do not match';
    }

    return true;
};

export const tryAuth = (user: IndexProps, data: IndexProps[]) => {
    for (let i = 0; i < data.length; i++) {
        if (
            (user.nameOrEmail === data[i].name ||
                user.nameOrEmail === data[i].email) &&
            user.password === data[i].password
        ) {
            return true;
        }
    }

    for (let key in user) {
        if (user[key] === '') {
            return 'Fill all fields';
        }
    }

    return 'Incorrect login or password';
};
