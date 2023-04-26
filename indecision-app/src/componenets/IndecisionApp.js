import React from 'react';
import AddOption from './AddOptions';
import Action from './Action';
import Options from './Options';
import Header from './Header';
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
  state = {
    options: this.props.options,
    selectedOption: undefined
  };
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({ selectedOption: option }))
  }
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  }

  handleRemoveSelected = () => {
    console.log("handleRemoveSelected is called!!!")
    this.setState(() => ({
      selectedOption: undefined
    }));
    console.log(this.state)

  }

  componentDidMount = () => {
    console.log('fetching data');
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options)
        this.setState(() => ({ options }))
    } catch (e) {
      console.log('the data is corrupted')
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log('saving data');
    if (prevState.options.length != this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount = () => {
    console.log('componentWillUnmount');
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';
    console.log("Rendering")
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className='container'>
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleRemoveSelected={this.handleRemoveSelected}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};  
