"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var state = [];

// This grabs the DOM element to be used to mount React components.
var headerNode = document.getElementById("header");
var contentNode = document.getElementById("contents");

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "header",
        null,
        React.createElement(
          "h1",
          null,
          React.createElement(
            "a",
            { href: "/index.html" },
            "OverBored"
          )
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Landing = function (_React$Component2) {
  _inherits(Landing, _React$Component2);

  function Landing() {
    _classCallCheck(this, Landing);

    return _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).call(this));
  }

  _createClass(Landing, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "header",
          null,
          React.createElement(
            "h1",
            null,
            React.createElement(
              "a",
              { href: "/index.html" },
              "OverBored"
            )
          )
        ),
        React.createElement(
          "main",
          null,
          React.createElement(
            "p",
            null,
            "Welcome to OverBored! Use this application to figure out what to do with your friends instead of sitting around being bored. Filter activities based on price, activity level, number of people, and how far away you're willing to travel. Have fun!"
          ),
          React.createElement(
            "a",
            { href: "/results.html" },
            "Start your Search"
          )
        )
      );
    }
  }]);

  return Landing;
}(React.Component);

//ReactDOM.render(<Header />, headerNode);


ReactDOM.render(React.createElement(Landing, null), contentNode);