class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handleaAddOne=this.handleaAddOne.bind(this)
        this.handleaRemoveOne=this.handleaRemoveOne.bind(this) 
        this.handleaReset=this.handleaReset.bind(this)
        this.state = { 
            count: props.count
        }
      }
      
      handleaAddOne() {
        this.setState((prevState) => ( {
                count: prevState.count + 1
            }));
        console.log("add one")
      }
      handleaRemoveOne() {
        this.setState((prevState) => ( {
            count: prevState.count - 1
        }));
      console.log("remove нахуй")
      }
      handleaReset() {
        this.setState(() => ({
              count: 1
        }));
        console.log("нахуй !")
      }
      render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick = {this.handleaAddOne}>+1</button>
                <button onClick = {this.handleaRemoveOne}>-1</button>
                <button onClick = {this.handleaReset}> Reset</button>
            </div>
        );
    }
}

Counter.defaultProps={
    count: {10}
}
const renderInDecitionApp = () => {
    const template = <div>
        <Counter count={5}/>
        </div>
    ReactDOM.render(template, document.getElementById('app'));
}

renderInDecitionApp();