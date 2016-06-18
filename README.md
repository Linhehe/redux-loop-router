redux-loop-router
=========================

```
export {
  TRANSITION: string,
  TRANSITION_SUCCESS: string,
  UPDATE_LOCATION: string,

  push: (location: Location) => Action,
  replace: (location: Location) => Action,
  go: (n: number) => Action,
  goBack: () => Action,
  goForward: () => Action,
  transitionSuccess: () => Action,
  updateLocation: (location: Location) => Action,

  createReducer: (history: History) => (state: any, action: Action) => Loop,
}
```
