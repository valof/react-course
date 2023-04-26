const Header = (props) => {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>This is fucking crap</h2>
      </div>
    );
}

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      
      >What should I do?</button>
    </div>
  );
}

const Option = (props) => {
  return (
    <div>
      <p>{props.optionText}</p>
    </div>
  );

}

const Options = (props) => {
  return (
    <div>
      <div>
        <button onClick = {props.handleDeleteOptions}>Посылай всё нахуй!</button>
        { props.options.map((x) => {return <Option key={x} optionText={x} />}) }
      </div>
    </div>
  );
}

  class AddOptions extends React.Component {
    constructor(props) {
      super(props);
      this.handleAddOption=this.handleAddOption.bind(this);
      this.state = {
        error: undefined
      };
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const err = this.props.handleAddOption(option)

        this.setState (()=> ({error: err}));
      }
      
      render() {
        return (
          <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
              <input type="text" name="option" />
              <br/>
              <button>Добавить!!!!</button>
            </form>
          </div>
        );
      }
  }


  class IndecisionApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handleAddOptionIndecision = this.handleAddOptionIndecision.bind(this);
      this.handlePick = this.handlePick.bind(this);

      this.state = {
        options: []
      };
    }

    handleDeleteOptions() {
      this.setState(() => ( { options: [] } ));
    }

    handlePick() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
    }

    handleAddOptionIndecision(option){
      if (!option) {
        return 'Error: Enter valid option!'
      } else if (this.state.options.indexOf(option) != -1) {
        return 'Error: The options is already there!'
      }
      this.setState((prevState) => ( { options: prevState.options.concat(option) } ));
    }

    render () {
      const title = 'Indecision';
      const subtitle = 'This is fucking crap';

      return (
        <div>
            <Header title = {title} subtitle = {subtitle}/>
            <Action 
              hasOptions={this.state.options.length>0}
              handlePick={this.handlePick} 
            />
            <Options 
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              />
            <AddOptions 
              handleAddOption={this.handleAddOptionIndecision}
            />
        </div>
        );
      }
  }
 
  ReactDOM.render(<IndecisionApp />, document.getElementById('app'));