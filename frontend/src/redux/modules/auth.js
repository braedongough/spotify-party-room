import { createActions, handleActions } from 'redux-actions';

export const LOGIN = 'auth/LOGIN';
export const SET_TOKEN = 'auth/SET_TOKEN';

export const {
  auth: { login, setToken },
} = createActions({
  [LOGIN]: undefined,
  [SET_TOKEN]: token => {
    console.log('token is set as:', token);
    return { token };
  },
});

const defaultState = {
  loggedIn: false,
  token: '',
};

const authReducer = handleActions(
  {
    [LOGIN]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    [SET_TOKEN]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  defaultState
);

export default authReducer;
