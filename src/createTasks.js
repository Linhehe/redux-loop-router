import {
  transitionSuccess,
} from './actions';

export default (history) => ({
  transition(method, args) {
    history[method](...args);
    return transitionSuccess();
  },
});
