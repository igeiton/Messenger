import { login } from './Store/authSlice';
import { useAppDispatch } from './Store/store';

function App() {
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(login({ isAuth: false }));
    };

    return (
        <>
            <div>App</div>
            <button onClick={handleLogout}>logout</button>
        </>
    );
}

export default App;
