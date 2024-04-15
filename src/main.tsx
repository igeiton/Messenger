import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';
import './styles/style.css';
import { Provider } from 'react-redux';
import store, { persistor } from './App/Store/store.ts';
import { PersistGate } from 'redux-persist/integration/react';

const root = document.getElementById('root');

ReactDOM.createRoot(root!).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={router} />
        </PersistGate>
    </Provider>
);
