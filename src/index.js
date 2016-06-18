import createReducerFromTasks from './createReducer';
import createTasks from './createTasks';

export const createReducer = (history) => {
  const tasks = createTasks(history);
  return createReducerFromTasks(tasks);
};

export {
  TRANSITION,
  TRANSITION_SUCCESS,
  UPDATE_LOCATION,

  push,
  replace,
  go,
  goBack,
  goForward,
  transitionSuccess,
  updateLocation,
} from './actions';
