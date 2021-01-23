import React from 'React' 

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
          <h2>Count: { count }</h2>
          <Button titile = "+" task = { () => this.incrementCount() } />
          <Button titile = "-" task = { () => this.decrementCount() }/>
        </div>
      )
    }
  }
  
  
  const id = setInterval(() => (new Date().toLocaleString()), 1000);
  clearInterval(id);
  