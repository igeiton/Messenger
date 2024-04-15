import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../Store/store';

export default function CheckAuth() {
    const { isAuth } = useAppSelector((state) => state.auth);

    if (!isAuth) {
        return <Navigate to={'/auth'} />;
    }

    return <Outlet />;
}
