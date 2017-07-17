"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsCssTransitionGroup = require("react-addons-css-transition-group");

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Header() {
    return _react2.default.createElement(
        DivContainer,
        { classes: "div-header" },
        _react2.default.createElement(
            "div",
            null,
            "header"
        )
    );
}
function HeaderBar() {

    var items = [{ id: "item-1", text: "Home" }, { id: "item-2", text: "Meu Perfil" }, { id: "item-3", text: "Artigos e Notícias" }, { id: "item-4", text: "Seminários" }, { id: "item-5", text: "Consultas", children: [_react2.default.createElement(
            MenuItemChildContainer,
            { key: "item-5-inner" },
            _react2.default.createElement(
                Link,
                null,
                " Aconselhamento Alimentar "
            ),
            _react2.default.createElement(
                Link,
                null,
                " Hipnoterapia "
            )
        )] }, { id: "item-6", text: "Locais de Trabalho", children: [_react2.default.createElement(
            MenuItemChildContainer,
            { key: "item-6-inner" },
            _react2.default.createElement(
                Blurb,
                null,
                " Aconselhamento Alimentar "
            ),
            _react2.default.createElement(
                Blurb,
                null,
                " Hipnoterapia "
            )
        )] }, { id: "item-7", text: "Parceiros", children: [_react2.default.createElement(
            MenuItemChildContainer,
            { key: "item-7-inner" },
            _react2.default.createElement(
                Link,
                null,
                " Aconselhamento Alimentar "
            ),
            _react2.default.createElement(
                Link,
                null,
                " Hipnoterapia "
            )
        )] }, { id: "item-8", text: "Reflexões", children: [_react2.default.createElement(
            MenuItemChildContainer,
            { key: "item-8-inner" },
            _react2.default.createElement(
                Note,
                null,
                " Aconselhamento Alimentar "
            ),
            _react2.default.createElement(
                Link,
                null,
                " Hipnoterapia "
            )
        )] }];

    var menuItems = items.map(function (item) {
        return _react2.default.createElement(
            MenuItem,
            { key: item.id, label: item.text },
            item.children
        );
    });

    return _react2.default.createElement(
        DivContainer,
        { classes: "div-headerbar" },
        _react2.default.createElement("div", { className: "div-headerbar-across" }),
        menuItems
    );
}
function MainContent() {
    return _react2.default.createElement(
        DivContainer,
        { classes: "div-maincontent" },
        _react2.default.createElement(
            "div",
            null,
            "maincontent"
        )
    );
}
function Sidebar() {
    return _react2.default.createElement(
        DivContainer,
        { classes: "div-sidebar" },
        _react2.default.createElement(
            "div",
            null,
            "sidebar"
        )
    );
}
function Footer() {
    return _react2.default.createElement(
        DivContainer,
        { classes: "div-footer" },
        _react2.default.createElement(
            "div",
            null,
            "footer"
        )
    );
}

var MainApp = function (_React$Component) {
    _inherits(MainApp, _React$Component);

    function MainApp() {
        _classCallCheck(this, MainApp);

        return _possibleConstructorReturn(this, (MainApp.__proto__ || Object.getPrototypeOf(MainApp)).apply(this, arguments));
    }

    _createClass(MainApp, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                MainContainer,
                null,
                _react2.default.createElement(Header, null),
                _react2.default.createElement(HeaderBar, null),
                _react2.default.createElement(Sidebar, null),
                _react2.default.createElement(MainContent, null),
                _react2.default.createElement(Footer, null)
            );
        }
    }]);

    return MainApp;
}(_react2.default.Component);

function LogoHeader() {
    return _react2.default.createElement("img", { src: "http://loosepixel.com/wp-content/uploads/2013/02/copy-flat_lplogo.png" });
}
function DivContainer(props) {
    var className = "";
    if (typeof props.classes != "undefined") {
        className = props.classes + " ";
    }
    className = className + "div-container";
    return _react2.default.createElement(
        "div",
        { className: className },
        props.children
    );
}
function MainContainer(props) {
    return _react2.default.createElement(
        "div",
        { className: "div-main" },
        props.children
    );
}

var MenuItem = function (_React$Component2) {
    _inherits(MenuItem, _React$Component2);

    function MenuItem(props) {
        _classCallCheck(this, MenuItem);

        var _this2 = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props));

        _this2.handleClick = _this2.handleClick.bind(_this2);
        _this2.handleClickOutside = _this2.handleClickOutside.bind(_this2);
        _this2.state = { showChildren: false };
        return _this2;
    }

    _createClass(MenuItem, [{
        key: "handleClick",
        value: function handleClick() {
            if (this.props.children) {
                this.setState(function (prevState) {
                    var newState = !prevState.showChildren;

                    if (newState) {
                        document.addEventListener("click", this.handleClickOutside, true);
                    }

                    return {
                        showChildren: !prevState.showChildren
                    };
                });
            }
        }
    }, {
        key: "handleClickOutside",
        value: function handleClickOutside(event) {
            var domNode = _reactDom2.default.findDOMNode(this);

            if (!domNode || !domNode.contains(event.target)) {
                document.removeEventListener("click", this.handleClickOutside, true);
                this.setState({ showChildren: false });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var buttonClass = "div-menu-item-button";
            var children = _react2.default.createElement("span", null);

            if (this.state.showChildren) {
                buttonClass += " selected";
            }

            if (this.props.children) {
                children = _react2.default.Children.map(this.props.children, function (child) {
                    return _react2.default.cloneElement(child, {
                        visible: _this3.state.showChildren
                    });
                });
            }

            return _react2.default.createElement(
                "div",
                { className: "div-menu-item noselect", onClick: this.handleClick },
                _react2.default.createElement(
                    "div",
                    { className: buttonClass, "data-text": this.props.label },
                    this.props.label
                ),
                children
            );
        }
    }]);

    return MenuItem;
}(_react2.default.Component);

var MenuItemChildContainer = function (_React$Component3) {
    _inherits(MenuItemChildContainer, _React$Component3);

    function MenuItemChildContainer(props) {
        _classCallCheck(this, MenuItemChildContainer);

        return _possibleConstructorReturn(this, (MenuItemChildContainer.__proto__ || Object.getPrototypeOf(MenuItemChildContainer)).call(this, props));
    }

    _createClass(MenuItemChildContainer, [{
        key: "render",
        value: function render() {

            var classes = "div-menu-item-child-container noselect";

            if (this.props.visible) {
                classes += " visible";
            }

            return _react2.default.createElement(
                "div",
                { className: classes },
                this.props.children,
                " ",
                this.props.loggedIn
            );
        }
    }]);

    return MenuItemChildContainer;
}(_react2.default.Component);

function Link(props) {
    return _react2.default.createElement(
        "a",
        { className: "link" },
        props.children
    );
}
function Blurb(props) {
    return _react2.default.createElement(
        "div",
        { className: "blurb" },
        props.children
    );
}
function Note(props) {
    return _react2.default.createElement(
        "div",
        { className: "note" },
        props.children
    );
}
_reactDom2.default.render(_react2.default.createElement(MainApp, null), document.getElementById("root"));
