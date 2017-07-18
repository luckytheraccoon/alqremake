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

    var items = [{ id: "menuItem_1", text: "Home" }, { id: "menuItem_2", text: "Meu Perfil" }, { id: "menuItem_3", text: "Artigos e Notícias" }, { id: "menuItem_4", text: "Seminários" }, { id: "menuItem_5", text: "Consultas", children: [_react2.default.createElement(
            MenuItemChildContainer,
            { key: "menuItem_5-inner" },
            _react2.default.createElement(
                Link,
                { url: "http://alquimiaalimentar.com/index.php?option=com_content&task=view&id=10&Itemid=8" },
                " Aconselhamento Alimentar "
            ),
            _react2.default.createElement(
                Link,
                { url: "http://alquimiaalimentar.com/index.php?option=com_content&task=view&id=354&Itemid=43" },
                " Hipnoterapia "
            )
        )] }, { id: "menuItem_6", text: "Locais de Trabalho", children: [_react2.default.createElement(
            MenuItemChildContainer,
            { width: "230px", key: "menuItem_6-inner" },
            _react2.default.createElement(
                Blurb,
                null,
                " ",
                _react2.default.createElement(
                    "strong",
                    null,
                    "Associa\xE7\xE3o P\xE9talas C\xF3smicas"
                ),
                _react2.default.createElement("br", null),
                "Lisboa - 211 561 754 "
            ),
            _react2.default.createElement(
                Blurb,
                null,
                " ",
                _react2.default.createElement(
                    "strong",
                    null,
                    " ",
                    _react2.default.createElement(
                        Link,
                        { url: "http://www.equilibrio-holistico.com/" },
                        "Equilibrio Holistico"
                    )
                ),
                _react2.default.createElement("br", null),
                "Telheiras - 217 574 531 "
            ),
            _react2.default.createElement(
                Blurb,
                null,
                " ",
                _react2.default.createElement(
                    "strong",
                    null,
                    " ",
                    _react2.default.createElement(
                        Link,
                        { url: "https://www.facebook.com/almamundi.welnesscenter" },
                        "Almamundi Spa"
                    )
                ),
                _react2.default.createElement("br", null),
                "Fern\xE3o Ferro - 969 981 527 "
            ),
            _react2.default.createElement(
                Blurb,
                null,
                " ",
                _react2.default.createElement(
                    "strong",
                    null,
                    " ",
                    _react2.default.createElement(
                        Link,
                        { url: "http://tantralounge-porto.tk" },
                        "Tantra Lounge"
                    )
                ),
                _react2.default.createElement("br", null),
                "Porto - 220 999 428 "
            ),
            _react2.default.createElement(
                Blurb,
                null,
                " ",
                _react2.default.createElement(
                    "strong",
                    null,
                    "E-Mail:"
                ),
                " isacosta1963@gmail.com "
            )
        )] }, { id: "menuItem_7", text: "Parceiros", children: [_react2.default.createElement(
            MenuItemChildContainer,
            { key: "menuItem_7-inner" },
            _react2.default.createElement(
                Link,
                { url: "http://commedida.webnode.pt/" },
                "ComMedida"
            ),
            _react2.default.createElement(
                Link,
                { url: "http://leitedaterra.blogspot.pt/" },
                "Leite Da Terra"
            ),
            _react2.default.createElement(
                Link,
                { url: "http://www.biovivos.pt/" },
                "BioVivos"
            ),
            _react2.default.createElement(
                Link,
                { url: "http://www.facebook.com/loveingreenjuicers" },
                "Love In Green"
            ),
            _react2.default.createElement(
                Link,
                { url: "http://alquimiaalimentar.com/index.php?option=com_content&task=view&id=381" },
                "Equil\xEDbrio Hol\xEDstico"
            )
        )] }, { id: "menuItem_8", text: "Reflexões", children: [_react2.default.createElement(
            MenuItemChildContainer,
            { width: "230px", key: "menuItem_8-inner" },
            _react2.default.createElement(
                Note,
                null,
                " Documentos PowerPoint que neles cont\xEAm reflex\xF5es para desfrutar calmamente. "
            ),
            _react2.default.createElement(
                Link,
                { url: "downloads/ComooravaGandhi.pps" },
                "Reflex\xE3o \"Como Orava Ghandi\""
            ),
            _react2.default.createElement(
                Link,
                { url: "downloads/VoodoGanso.pps" },
                "Reflex\xE3o \"Voo do Ganso\""
            ),
            _react2.default.createElement(
                Link,
                { url: "downloads/Girassol.pps" },
                "Reflex\xE3o \"Girassol\""
            )
        )] }];

    var menuItems = items.map(function (item) {
        return _react2.default.createElement(
            MenuItem,
            { id: item.id, key: item.id, label: item.text },
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
        value: function handleClick(event) {

            if (this.props.children) {

                var thisElement = event.target;
                var childContainer = event.target.nextSibling;

                childContainer.style.left = 0 - childContainer.offsetWidth / 2 + thisElement.offsetWidth / 2 + "px";

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

            var buttonClass = "div-menu-item-button noselect";
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
                { className: "div-menu-item", onClick: this.handleClick },
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

            var classes = "div-menu-item-child-container";

            if (this.props.visible) {
                classes += " visible";
            }

            var style = { width: "230px" };

            return _react2.default.createElement(
                "div",
                { style: style, className: classes },
                _react2.default.createElement(
                    "div",
                    { className: "div-inner-container" },
                    this.props.children,
                    this.props.loggedIn
                )
            );
        }
    }]);

    return MenuItemChildContainer;
}(_react2.default.Component);

function Link(props) {
    return _react2.default.createElement(
        "a",
        { href: props.url, className: "link" },
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
