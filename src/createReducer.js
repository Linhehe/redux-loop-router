import {loop, Cmd} from 'redux-loop';

import {
  TRANSITION,
  UPDATE_LOCATION,
} from './actions';

export default (tasks) => (state = {}, action) => {
  if (action.type === TRANSITION) {
    return loop(
      state
    ,
      Cmd.call(tasks.transition, action.method, action.args)
    );
  }

  if (action.type === UPDATE_LOCATION) {
    return loop({
      ...state,
      location: action.location,
    },
      Cmd.none
    );
  }

  return loop(state, Cmd.none);
}
