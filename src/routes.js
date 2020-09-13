import React, { Component } from 'react';
import { connect } from 'react-redux';
import { test} from './actions/userAction';
import Home from './components/home';

class Routes extends React.Component{

   constructor(props) {
      super(props);
      
   }

   render() {
     
        console.log(this.props.testData);
         return (
         <div>
            <Home onClick={()=>this.props.handleClick('hi')} />
            <p>container</p>
         </div>
         );
      }
      

} 


const mapStateToProps = state => ({
  testData: state
});


const mapDispatchToProps = (dispatch) => ({
  
   handleClick: (payload) => dispatch(test(payload))
   
 })

export default connect(
   mapStateToProps , 
   mapDispatchToProps
   )(Routes);
