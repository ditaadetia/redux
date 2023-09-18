import home from '../pages/home/reducer';
import profile from '../pages/profile/redux/reducer';
import contact from '../pages/contact/reducer';
import login from '../pages/login/redux/reducer';
import {combineReducers} from 'redux';

export const combinedReducers = combineReducers({
    home,
    profile,
    contact,
    login,
});