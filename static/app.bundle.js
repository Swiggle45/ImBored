webpackJsonp([0],{

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'h1',
          null,
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/places' },
            'OverBored'
          )
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(83);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(43);

var _landing = __webpack_require__(237);

var _landing2 = _interopRequireDefault(_landing);

var _results = __webpack_require__(238);

var _results2 = _interopRequireDefault(_results);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contentNode = document.getElementById("contents");

var NoMatch = function NoMatch() {
  return _react2.default.createElement(
    'p',
    null,
    'Page Not Found'
  );
};
var RoutedApp = function RoutedApp() {
  return _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory },
    _react2.default.createElement(_reactRouter.Redirect, { from: '/', to: '/places' }),
    _react2.default.createElement(_reactRouter.Route, { path: '/places', component: (0, _reactRouter.withRouter)(_landing2.default) }),
    _react2.default.createElement(_reactRouter.Route, { path: '/results', component: (0, _reactRouter.withRouter)(_results2.default) }),
    _react2.default.createElement(_reactRouter.Route, { path: '*', component: NoMatch })
  );
};

_reactDom2.default.render(_react2.default.createElement(RoutedApp, null), contentNode);

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(43);

var _Header = __webpack_require__(119);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This grabs the DOM element to be used to mount React components.

var Landing = function (_React$Component) {
  _inherits(Landing, _React$Component);

  function Landing() {
    _classCallCheck(this, Landing);

    return _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).call(this));
  }

  _createClass(Landing, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'contents' },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'main',
          null,
          _react2.default.createElement(
            'p',
            null,
            'Welcome to OverBored! Use this application to figure out what to do with your friends instead of sitting around being bored. Filter activities based on price, activity level, number of people, and how far away you\'re willing to travel. Have fun!'
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/results' },
            'Start your search!'
          )
        )
      );
    }
  }]);

  return Landing;
}(_react2.default.Component);

exports.default = Landing;

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(120);

var _Header = __webpack_require__(119);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This grabs the DOM element to be used to mount React components.
var Results = function (_React$Component) {
    _inherits(Results, _React$Component);

    function Results() {
        _classCallCheck(this, Results);

        var _this = _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).call(this));

        _this.state = {
            price: 3,
            distance: 25,
            numberOfPeople: 11,
            activityLvl: 3
        };
        return _this;
    }

    _createClass(Results, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { id: 'results' },
                _react2.default.createElement(_Header2.default, null),
                _react2.default.createElement(
                    'main',
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'div',
                            { id: 'main' },
                            _react2.default.createElement(
                                'div',
                                { id: 'table' },
                                _react2.default.createElement(ResultsTable, { priceVar: this.state.price,
                                    distVar: this.state.distance,
                                    peopleVar: this.state.numberOfPeople,
                                    activityVar: this.state.activityLvl })
                            )
                        ),
                        _react2.default.createElement('div', { id: 'line' }),
                        _react2.default.createElement(
                            'div',
                            { id: 'sidebar' },
                            _react2.default.createElement(Filters, { price: this.state.price, changePrice: function changePrice(price) {
                                    return _this2.setState({ price: price });
                                },
                                dist: this.state.distance, changeDist: function changeDist(distance) {
                                    return _this2.setState({ distance: distance });
                                },
                                people: this.state.numberOfPeople, changePeople: function changePeople(numberOfPeople) {
                                    return _this2.setState({ numberOfPeople: numberOfPeople });
                                },
                                activity: this.state.activityLvl, changeActivity: function changeActivity(activity) {
                                    return _this2.setState({ activityLvl: activity });
                                } })
                        ),
                        _react2.default.createElement('div', { id: 'sliders' })
                    )
                )
            );
        }
    }]);

    return Results;
}(_react2.default.Component);

exports.default = Results;

var ResultsTable = function (_React$Component2) {
    _inherits(ResultsTable, _React$Component2);

    function ResultsTable(props) {
        _classCallCheck(this, ResultsTable);

        var _this3 = _possibleConstructorReturn(this, (ResultsTable.__proto__ || Object.getPrototypeOf(ResultsTable)).call(this, props));

        _this3.state = { places: [], filteredData: [] };

        _this3.createPlace = _this3.createPlace.bind(_this3);
        _this3.setFilter = _this3.setFilter.bind(_this3);
        return _this3;
    }

    _createClass(ResultsTable, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadData();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps === this.props) {
                return;
            }
            this.loadData();
        }
    }, {
        key: 'loadData',
        value: function loadData() {
            var _this4 = this;

            fetch('/api/results').then(function (response) {
                if (response.ok) {
                    response.json().then(function (data) {
                        console.log("Total count of records:", data._metadata.total_count);
                        _this4.setState({ places: data.records });
                    });
                } else {
                    response.json().then(function (error) {
                        alert("Failed to fetch places:" + error.message);
                    });
                }
            }).catch(function (err) {
                alert("Error in fetching data from server:", err);
            });
        }
    }, {
        key: 'createPlace',
        value: function createPlace(newPlace) {
            var _this5 = this;

            fetch('/api/results', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newPlace)
            }).then(function (res) {
                if (res.ok) {
                    res.json().then(function (updatedPlace) {
                        var newPlaces = _this5.state.places.concat(updatedPlace);
                        _this5.setState({ places: newPlaces, filteredData: _this5.state.filteredData });
                    });
                } else {
                    res.json().then(function (error) {
                        alert('Failed to add issue: ' + error.message);
                    });
                }
            });
        }
    }, {
        key: 'setFilter',
        value: function setFilter(query) {
            this.props.router.push({ pathname: this.props.location.pathname, query: query });
        }
    }, {
        key: 'render',
        value: function render() {
            var priceVar = this.props.priceVar;
            var distanceVar = parseInt(this.props.distVar);
            var numberOfPeopleVar = parseInt(this.props.peopleVar);
            var activityLvlVar = this.props.activityVar;
            this.state.filteredData = this.state.places.filter(function (location) {
                return location.price <= priceVar && location.distance <= distanceVar && location.numberOfPeople <= numberOfPeopleVar && location.activityLvl <= activityLvlVar;
            });
            var rows = this.state.filteredData.map(function (location) {
                return _react2.default.createElement(LocationRow, { key: location.name, places: location
                });
            });
            var borderedStyle = { border: "1px Solid Silver", padding: 6 };
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { id: 'newPlace' },
                    _react2.default.createElement(AddPlace, { createPlace: this.createPlace })
                ),
                _react2.default.createElement(
                    'table',
                    null,
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            { style: borderedStyle },
                            _react2.default.createElement(
                                'th',
                                null,
                                'Location'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Price'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Distance'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Number of People'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Activity Level'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        rows
                    )
                )
            );
        }
    }]);

    return ResultsTable;
}(_react2.default.Component);

var LocationRow = function LocationRow(props) {
    return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
            'td',
            null,
            props.places.name
        ),
        _react2.default.createElement(
            'td',
            null,
            priceEval(props.places.price)
        ),
        _react2.default.createElement(
            'td',
            null,
            distEval(props.places.distance)
        ),
        _react2.default.createElement(
            'td',
            null,
            peopleEval(props.places.numberOfPeople)
        ),
        _react2.default.createElement(
            'td',
            null,
            activityEval(props.places.activityLvl)
        )
    );
};

var Filters = function (_React$Component3) {
    _inherits(Filters, _React$Component3);

    function Filters(props) {
        _classCallCheck(this, Filters);

        return _possibleConstructorReturn(this, (Filters.__proto__ || Object.getPrototypeOf(Filters)).call(this, props));
    }

    _createClass(Filters, [{
        key: 'render',
        value: function render() {
            var _this7 = this;

            return _react2.default.createElement(
                'div',
                { id: 'filters' },
                _react2.default.createElement(
                    'p',
                    null,
                    'Distance',
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'div',
                        { className: 'slideContainer' },
                        _react2.default.createElement('input', { type: 'range', className: 'slider', id: 'distanceSlider', min: '0', max: '25', step: '5', defaultValue: '25', onChange: function onChange() {
                                return _this7.props.changeDist(document.getElementById("distanceSlider").value);
                            } })
                    ),
                    _react2.default.createElement(
                        'div',
                        { id: 'distanceValue' },
                        distEval(this.props.dist)
                    )
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Price Range',
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'div',
                        { className: 'slideContainer' },
                        _react2.default.createElement('input', { type: 'range', className: 'slider', id: 'priceSlider', min: '1', max: '3', step: '1', defaultValue: '3', onChange: function onChange() {
                                return _this7.props.changePrice(document.getElementById("priceSlider").value);
                            } })
                    ),
                    _react2.default.createElement(
                        'div',
                        { id: 'priceValue' },
                        priceEval(this.props.price)
                    )
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Number of People',
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'div',
                        { className: 'slideContainer' },
                        _react2.default.createElement('input', { type: 'range', className: 'slider', id: 'peopleSlider', min: '1', max: '11', step: '1', defaultValue: '11', onChange: function onChange() {
                                return _this7.props.changePeople(document.getElementById("peopleSlider").value);
                            } })
                    ),
                    _react2.default.createElement(
                        'div',
                        { id: 'peopleValue' },
                        peopleEval(this.props.people)
                    )
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Activity Level',
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'div',
                        { className: 'slideContainer' },
                        _react2.default.createElement('input', { type: 'range', className: 'slider', id: 'activitySlider', min: '1', max: '3', step: '1', defaultValue: '3', onChange: function onChange() {
                                return _this7.props.changeActivity(document.getElementById("activitySlider").value);
                            } })
                    ),
                    _react2.default.createElement(
                        'div',
                        { id: 'activityValue' },
                        activityEval(this.props.activity)
                    )
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Over 21?',
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'div',
                        { className: 'checkContainer' },
                        _react2.default.createElement('input', { type: 'checkbox', id: 'ageCheck' })
                    )
                ),
                _react2.default.createElement('script', null)
            );
        }
    }]);

    return Filters;
}(_react2.default.Component);

var AddPlace = function (_React$Component4) {
    _inherits(AddPlace, _React$Component4);

    function AddPlace() {
        _classCallCheck(this, AddPlace);

        var _this8 = _possibleConstructorReturn(this, (AddPlace.__proto__ || Object.getPrototypeOf(AddPlace)).call(this));

        _this8.handleSubmit = _this8.handleSubmit.bind(_this8);
        return _this8;
    }

    _createClass(AddPlace, [{
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            var form = document.forms.placeAdd;
            this.props.createPlace({
                name: form.name.value,
                price: form.price.value,
                distance: form.distance.value,
                numberOfPeople: form.numberOfPeople.value,
                activityLvl: form.activityLvl.value
            });
            // Clear the form for the next input.
            form.name.value = '';
            form.price.value = '';
            form.distance.value = '';
            form.numberOfPeople.value = '';
            form.activityLvl.value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'form',
                    { name: 'placeAdd', onSubmit: this.handleSubmit },
                    _react2.default.createElement('input', { type: 'text', name: 'name', placeholder: 'Name' }),
                    _react2.default.createElement('input', { type: 'text', name: 'price', placeholder: 'Price' }),
                    _react2.default.createElement('input', { type: 'text', name: 'distance', placeholder: 'Distance' }),
                    _react2.default.createElement('input', { type: 'text', name: 'numberOfPeople', placeholder: 'Number of People' }),
                    _react2.default.createElement('input', { type: 'text', name: 'activityLvl', placeholder: 'Activity Level' }),
                    _react2.default.createElement(
                        'button',
                        null,
                        'Add'
                    )
                )
            );
        }
    }]);

    return AddPlace;
}(_react2.default.Component);

function priceEval(price) {
    if (price == 1) return "$";else if (price == 2) return "$$";else return "$$$";
}

function distEval(distance) {
    if (distance == 0) return "On Campus";else return distance + " miles";
}

function peopleEval(people) {
    if (people >= 11) return "Any";
    if (people == 1) return people;else return people + " or fewer";
}

function activityEval(activity) {
    if (activity == 1) return "Low";else if (activity == 2) return "Medium";else return "High";
}

/***/ })

},[121]);
//# sourceMappingURL=app.bundle.js.map