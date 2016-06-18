export const TRANSITION = 'TRANSITION';
export const TRANSITION_SUCCESS = 'TRANSITION_SUCCESS';
export const UPDATE_LOCATION = 'UPDATE_LOCATION';

const transition = (method) => (...args) => ({
  type: TRANSITION,
  method,
  args,
});

export const push = transition('push');
export const replace = transition('replace');
export const go = transition('go');
export const goBack = transition('goBack');
export const goForward = transition('goForward');

export const transitionSuccess = () => ({
  type: TRANSITION_SUCCESS,
});

export const updateLocation = (location) => ({
  type: UPDATE_LOCATION,
  location,
});
