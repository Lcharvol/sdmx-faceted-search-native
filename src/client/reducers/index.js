import { combineReducers } from 'redux';
import config from './config';
import facets from './facets';

const reducer = combineReducers({
  facets,
  config,
});

export default reducer;