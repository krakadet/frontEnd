import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user from './user';
import runtime from './runtime';
import auth from './auth';

export default combineReducers({
  user,
  auth,
  runtime,
  form: formReducer,
});
