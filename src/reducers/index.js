import { combineReducers } from 'redux';
import Postreducer from './posts-reducers';
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  posts:Postreducer,
  form: formReducer
});

export default rootReducer;
