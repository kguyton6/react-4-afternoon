import React, { Component } from 'react';
import axios from 'axios'

// import routes from './routes'

export default class ClassList extends Component {
  constructor(props) {
    super(props)

    this.setState = {
      classes: []
    }
      
  }
    componentDidMount() { 
    axios.get(`/localhost:3005/classlist?class=props`)
    .then((res) => 
    this.setState({
      classes: res.data })
  )
}

  render() {
    const students = this.state.students.map((student, id)=> {
    <h3 key={id}>{student.first_name}{student.last_name}</h3>})
    return (
      <div className="box">
      <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
            {students}
      </div>
    )
  }
}