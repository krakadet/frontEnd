import { SAVE_AUTH, LOGOUT_AUTH } from '../constants';

const initialState = { user: null };

export default function auth(state = initialState, action) {
  switch (action.type) {
    case SAVE_AUTH:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_AUTH:
      return initialState;
    default:
      return state;
  }
}
