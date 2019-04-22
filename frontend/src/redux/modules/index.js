import { combineReducers } from 'redux';
import auth, * as authModule from './auth';

export { authModule };

export default combineReducers({ auth });
