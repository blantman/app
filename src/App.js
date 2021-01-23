import React, { Component } from "react";
import Button from "./components/Button";
import ToDoList from "./ToDo";
import ToDo from  "./Todo/ToDoList"

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      count:0
    }
  }

incrementCount = () => {
  this.setState({
    count: this.state.count + 1
  })
}

decrementCount = () => {
  this.setState({
    count: this.state.count -1
})
}

  render () {
    let { count } = this.state;
    return(
      <div>
        <h2>what is the bill for today</h2>
        <Button titile = "+" task = { () => this.incrementCount() } />
        <Button titile = "-" task = { () => this.decrementCount() }/>
      </div>
    )
  }
}


const id = setInterval(() => (new Date().toLocaleString()), 1000);
clearInterval(id);



class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        };
    }
    render() {
        return (
            <p className="App-clock">
                Текущее время: {this.state.time}.
            </p>
        );
    }
}

function app() {
  const todo = {
    {id:1, completed: false, titile: "реакт"}
    {id:2, completed: false, titile: "cделать"}
    {id:3, completed: false, titile: "купить"}
  }
}

function app () {
  return(
    <div className='title'>
      <h1>do that</h1>
      <ToDoList todo={todo}/>
    </div>
  )
}
