class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  componentDidMount() {
    console.log('fetching data');
    try{
      const strCount = localStorage.getItem('count');
      const intCount = parseInt(strCount)
      if (! isNaN(intCount))
        console.log('Data is ' + strCount);
        this.setState(()=>({count: intCount}))
    } catch(e) {
      console.log('the data is corrupted')
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('saving data');
    if (prevState.count != this.state.count){
      localStorage.setItem('count', this.state.count);
    }
  }

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
