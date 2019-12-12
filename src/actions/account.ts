import { Dispatch } from 'redux';

const GET_USER_INFO = 'GET_USER_INFO';

export const ACS = {
  GET_USER_INFO,
};

export function getUserInfo(cb?: Function) {
  return (dispatch: Dispatch) => {
    new Promise((resolve, _reject) => {
      resolve();
    }).then(() => {
      dispatch({ type: GET_USER_INFO, payload: { user: { name: 'Frederick Chen' } } });
      cb && cb();
    });
  };
}

export default { getUserInfo };
