import React from 'react';
import {connect} from 'react-redux';
import Task from '../task'

class TaskList extends React.Component {
  render() {
    return (
      <table>
                <thead>
                    <tr>
                    <th>Books</th>
                    <th>Actions</th>
                    </tr>
                    </thead>
                   
                      { /* we will create a component task that will be replicately iterated and
                     used inside TaskList,it is an array so use map  */ }
                    <tbody>
                    {this.props.tasks.map((task, index) => <Task key ={index} task={task}/>)}
                        </tbody>
                </table>
      );
  }
}
function mapStateToProps(state) {
  return {
    tasks: state.task
  //taking state from reducers
  }
}

export default connect(mapStateToProps)(TaskList);
// 3,9 map statetoprops is when there is a change in input type that change(state) will be brought from input, action and sent to reducer