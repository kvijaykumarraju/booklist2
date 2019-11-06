import { combineReducers } from 'redux';
const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      state = state.concat(action.payload);
      break;
    case 'DELETE_TASK':
      state = state.slice();
      state.splice(action.payload, 1);
      break;
  }
  return state;
}
const reducers = combineReducers({
  task: tasksReducer
});
export default reducers;

//6 combineReducers is not required and DELETETASK the state spelling is wrong
// payload contails data that has been passed to action