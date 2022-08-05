import React, { Component } from 'react'

export default class Test extends Component {
    constructor(props){
        super(props)
    }
    componentDidCatch(){}
    componentDidMount(){}
  render() {
    console.log('props', this.props)
    const {} = this.state
    return (
      <div>Test</div>
    )
  }
}
