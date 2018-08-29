import React, { Component } from 'react';

import {Link, Route} from 'react-router-dom'


export default class Home extends Component {
  render() {
    return (
      <div className="box">
        <Link to='/classlist/:class/'><button 
         className='btn'>Math 1010</button></Link>
        <Link to='/classlist/:class'><button 
         className='btn'>English 2010</button></Link>    
        <Link to='/classlist/:class'><button 
         className='btn'>Biology 2020</button></Link>  
      </div>

    );
  }
}
