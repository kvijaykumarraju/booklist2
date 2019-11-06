import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import  {addTask}  from '../../actions';


class TaskBar extends React.Component {

  constructor(props){

    super(props);

    this.myRef = React.createRef();
  }


   clickHandler=()=>{
    //  console.log(this.myRef);
      this.props.addTask(this.myRef.current.value);
   }


  render() {

    
    return (
      <div>
                <input type="text" ref={this.myRef} placeholder="add the task"/>
                <button onClick={this.clickHandler}> Add Task</button>



            </div>
      );
  }
};
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ addTask}, dispatch);
// }






export default connect(null, {addTask})(TaskBar);

// export default connect({addTask}) (TaskBar)
// 2,8   black function because we dont need it and it will return nothing
// {connect} = to connect store in one component to another component
// listen to 25:00
//we dont want to map any state to props so we left it blank [connect(() => {}]
