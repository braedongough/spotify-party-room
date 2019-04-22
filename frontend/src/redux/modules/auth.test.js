import { setToken, SET_TOKEN } from './auth';

it('should set token', () => {
  const token = '1231k2j3n';
  const action = setToken(token);
  expect(action).toEqual({
    type: SET_TOKEN,
    payload: {
      token,
    },
  });
});
