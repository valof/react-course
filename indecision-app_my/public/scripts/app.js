"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Indecision"
    ),
    React.createElement(
      "h2",
      null,
      "This is fucking crap"
    )
  );
};

var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      {
        onClick: props.handlePick,
        disabled: !props.hasOptions

      },
      "What should I do?"
    )
  );
};

var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      props.optionText
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      null,
      React.createElement(
        "button",
        { onClick: props.handleDeleteOptions },
        "\u041F\u043E\u0441\u044B\u043B\u0430\u0439 \u0432\u0441\u0451 \u043D\u0430\u0445\u0443\u0439!"
      ),
      props.options.map(function (x) {
        return React.createElement(Option, { key: x, optionText: x });
      })
    )
  );
};

var AddOptions = function (_React$Component) {
  _inherits(AddOptions, _React$Component);

  function AddOptions(props) {
    _classCallCheck(this, AddOptions);

    var _this = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.state = {
      error: undefined
    };
    return _this;
  }

  _createClass(AddOptions, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var err = this.props.handleAddOption(option);

      this.setState(function () {
        return { error: err };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement("br", null),
          React.createElement(
            "button",
            null,
            "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C!!!!"
          )
        )
      );
    }
  }]);

  return AddOptions;
}(React.Component);

var IndecisionApp = function (_React$Component2) {
  _inherits(IndecisionApp, _React$Component2);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this2 = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this2.handleDeleteOptions = _this2.handleDeleteOptions.bind(_this2);
    _this2.handleAddOptionIndecision = _this2.handleAddOptionIndecision.bind(_this2);
    _this2.handlePick = _this2.handlePick.bind(_this2);

    _this2.state = {
      options: []
    };
    return _this2;
  }

  _createClass(IndecisionApp, [{
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
  }, {
    key: "handleAddOptionIndecision",
    value: function handleAddOptionIndecision(option) {
      if (!option) {
        return 'Error: Enter valid option!';
      } else if (this.state.options.indexOf(option) != -1) {
        return 'Error: The options is already there!';
      }
      this.setState(function (prevState) {
        return { options: prevState.options.concat(option) };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = 'Indecision';
      var subtitle = 'This is fucking crap';

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions
        }),
        React.createElement(AddOptions, {
          handleAddOption: this.handleAddOptionIndecision
        })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
