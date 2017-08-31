import { CONFIGLOADED } from '../actions/config';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case CONFIGLOADED:
      return state;
    default:
      return state;
  }
};

export default reducer;
