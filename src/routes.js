import React, { Component } from 'react';
import { connect } from 'react-redux';
import handleClick from './actions/testAction';
import Home from './components/home';

class Routes extends React.Component{

   constructor(props) {
      super(props);
      
   }



      render() {
         return (
         <div>
            <Home onClick={()=>this.props.handleClick('hi')} />
            <p>container</p>
         </div>
         );
      }
      

  
} 


const mapStateToProps = state => ({
  data: state
});


const mapDispatchToProps = (dispatch) => ({
  
   handleClick: (payload) => dispatch(handleClick(payload))
   
 })

export default connect(
   mapStateToProps , 
   mapDispatchToProps
   )(Routes);
