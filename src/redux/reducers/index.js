import { combineReducers } from 'redux';
import routing from './routing';
import navigation from './navigation';

export default combineReducers({
  navigation,
  routing,
});