// ACTION
export const  addTask = (task) => {
    return {
      type: 'ADD_TASK',
      payload: task
    };
  }
  export const deleteTask = (taskId) => {
    return {
      type: 'DELETE_TASK',
      payload: taskId
    };
  };
// export default {addTask};

// 5 reducers are the decision makers, they do task based on the task been triggered
// may be "" for the deletetask type