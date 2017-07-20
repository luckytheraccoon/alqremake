"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require("react-redux");

var _store = require("./store");

var _store2 = _interopRequireDefault(_store);

var _main = require("./components/main");

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require("../../../css/main.css");

var MainApp = function (_React$Component) {
    _inherits(MainApp, _React$Component);

    function MainApp() {
        _classCallCheck(this, MainApp);

        return _possibleConstructorReturn(this, (MainApp.__proto__ || Object.getPrototypeOf(MainApp)).apply(this, arguments));
    }

    _createClass(MainApp, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(_main2.default, null);
        }
    }]);

    return MainApp;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(MainApp, null)
), document.getElementById("root"));

/*
store.dispatch({
    type: "FETCH_USERS",
    payload: axios.get("http://rest.learncode.academy/api/lucastest/users")
});
store.dispatch((dispatch)=>{
    dispatch({type: "FETCH_USERS_START"});

    axios.get("http://rest.learncode.academy/api/lucastest/users")
        .then((response)=> {
            dispatch({type: "RECEIVE_USERS", payload: response.data});
        })
        .catch((error)=>{
            dispatch({type: "FETCH_USERS_ERROR", payload: error});
        });

    dispatch({type: "bar"});
});

*/
