import React, { Component } from 'react';
import axios from 'axios'
import { HashRouterProps } from 'react-router-dom'

export default class ClassList extends Component {
  constructor(props) {
    super(props)

    this.setState = {
      classes: []
    }
    this.componentDidMount(() => 
    axios.get(`/localhost:3005/classlist?class=props`).then((req, res) => res = res.data))
    this.setState({
      classes: res.data
    })
    res.status(200)
  }

  render() {
    return (
      <div className="box">
        <h1>{HashRouterProps}</h1>
        <h2>ClassList:</h2>

      </div>
    )
  }
}