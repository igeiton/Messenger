import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import App from './App/App';
import CheckAuth from './App/Auth/CheckAuth';
import AuthPage from './App/Auth/AuthPage';
import RegPage from './App/Auth/RegPage';

export const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<CheckAuth />}>
            <Route index element={<App />} />
        </Route>,
        <Route path="/auth" element={<AuthPage />} />,
        <Route path="/reg" element={<RegPage />} />,
    ])
);
