import { ACS } from 'actions/account';
import { AnyAction } from 'redux';

const ACTION_HANDLERS = {
  [ACS.GET_USER_INFO]: (state: State, action: AnyAction) => {
    return { ...state, ...action.payload };
  },
};

const initialState = {
  user: {},
};

type State = typeof initialState;

export default function reducer(state = initialState, action: AnyAction) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
