import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Home from '../pages/home';
import Profile from '../pages/profile';
import Contact from '../pages/contact';
import {persistedStore} from '../redux/store';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

function Layout() {
    const navigate = useNavigate();
    const clearAllData = () => {
        localStorage.removeItem('persist:userApp')
        navigate('/');
        window.location.reload();
    }
    const appData = useSelector((state) => state);
    return (
        <Provider store={store}>
        <PersistGate persistor={persistedStore}>
            <div className="App font-24">
                <h2>Welcome, {appData.login.users}</h2>
                <Home/>
                <Profile/>
                <Contact/>
                <button className="input" onClick={clearAllData}>Logout celear all data</button>
            </div>
        </PersistGate>
        </Provider>
    );
}

export default Layout;
