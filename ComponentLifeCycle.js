import React, { Component } from 'react'
export default class ComponentLifeCycle extends Component{
    constructor(props)
    {
        super(props);
        this.state={favcolor:"yellow"}
    }
    componentDidMount()
    {
        setTimeout(()=>{this.setState({favcolor:"pink"})},5000)
    }
    shouldComponentUpdate()
    {
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
   {
    document.getElementById("id1").innerHTML="Previous value "+prevState.favcolor;
   }
   componentDidUpdate()
   {
    document.getElementById("id2").innerHTML="current value "+this.state.favcolor;
   }
    render()
    {
        return(
            <div>
                <h1>My fav color is {this.state.favcolor}</h1>
                <p id ="id1"></p>
                <p id ="id2"></p>
            </div>
        )
    }
}