import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './components/About/About'
import Home from './components/Home/Home'
import ClassList from './components/ClassList/ClassList'


export default 
    <Switch>
        
        <Route component={Home} exact path='/'/>
        <Route component={About } exact path='/about'/>
        <Route component={ClassList} path='/ClassList/:class.js'/>
        
    </Switch>  

   
    
                
                
