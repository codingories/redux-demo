import React ,{ Component }from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: 0
    }
  }
  render(){
    return (
      <div className="App">
        <p>结果是{this.props.count}</p>
        <div>
          <button onClick={this.props.addOne}>+</button>
          <button onClick={this.props.minusOne}>-</button>
        </div>
        <div>
          <input type="number" value={this.state.inputValue}
           onChange={e=>this.setState({inputValue: e.target.value})}/>
           <button onClick={()=>{this.props.add(+this.state.inputValue)}}>确定</button>
        </div>
      </div>
    );
  }
}

export default App;
