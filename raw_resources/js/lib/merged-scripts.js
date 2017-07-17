import React from "react";
import ReactDOM from "react-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
function Header() {
    return (
        <DivContainer classes="div-header">
            <div>header</div>
        </DivContainer>
    );
}
function HeaderBar() {
    
    const items = [
        {id:"item-1", text: "Home"},
        {id:"item-2", text: "Meu Perfil"},
        {id:"item-3", text: "Artigos e Notícias"},
        {id:"item-4", text: "Seminários"},
        {id:"item-5", text: "Consultas", children: [
            <MenuItemChildContainer key="item-5-inner">
                <Link> Aconselhamento Alimentar </Link>
                <Link> Hipnoterapia </Link>
            </MenuItemChildContainer>
        ]},
        {id:"item-6", text: "Locais de Trabalho", children: [
            <MenuItemChildContainer key="item-6-inner">
                <Blurb> Aconselhamento Alimentar </Blurb>
                <Blurb> Hipnoterapia </Blurb>
            </MenuItemChildContainer>
        ]},
        {id:"item-7", text: "Parceiros", children: [
            <MenuItemChildContainer key="item-7-inner">
                <Link> Aconselhamento Alimentar </Link>
                <Link> Hipnoterapia </Link>
            </MenuItemChildContainer>
        ]},
        {id:"item-8", text: "Reflexões", children: [
            <MenuItemChildContainer key="item-8-inner">
                <Note> Aconselhamento Alimentar </Note>
                <Link> Hipnoterapia </Link>
            </MenuItemChildContainer>
        ]}
    ];

    const menuItems = items.map((item) =>
        <MenuItem key={item.id} label={item.text}>
            {item.children}
        </MenuItem>
    );

    return (
        <DivContainer classes="div-headerbar">
            <div className='div-headerbar-across'></div>
            {menuItems}
        </DivContainer>
    );
}
function MainContent() {
    return (
        <DivContainer classes="div-maincontent">
            <div>maincontent</div>
        </DivContainer>
    );
}
function Sidebar() {
    return (
        <DivContainer classes="div-sidebar">
            <div>sidebar</div>
        </DivContainer>
    );
}
function Footer() {
    return (
        <DivContainer classes="div-footer">
            <div>footer</div>
        </DivContainer>
    );
}
class MainApp extends React.Component {
    render() {
        return (
            <MainContainer>
                <Header />
                <HeaderBar />
                <Sidebar />
                <MainContent />
                <Footer />
            </MainContainer>
        );
    }
}

function LogoHeader() {
    return <img src="http://loosepixel.com/wp-content/uploads/2013/02/copy-flat_lplogo.png" />;
}
function DivContainer(props) {
    let className = "";
    if(typeof props.classes != "undefined") {
        className = props.classes + " ";
    }
    className = className + "div-container";
    return <div className={className}>{props.children}</div>;
}
function MainContainer(props) {
    return <div className="div-main">{props.children}</div>;
}
class MenuItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.state = {showChildren:false};
    }

    handleClick() {
        if (this.props.children) {
            this.setState(function (prevState) {
                let newState = !prevState.showChildren;

                if(newState) {
                    document.addEventListener("click", this.handleClickOutside, true);
                }

                return {
                    showChildren: !prevState.showChildren
                };
            });
            
        }
    }

    handleClickOutside(event) {
        const domNode = ReactDOM.findDOMNode(this);

        if ((!domNode || !domNode.contains(event.target))) {
            document.removeEventListener("click", this.handleClickOutside, true);
            this.setState({showChildren: false});
        }
    }
    
    render() {

        let buttonClass = "div-menu-item-button";
        let children = <span/>;

        if(this.state.showChildren) {
            buttonClass += " selected";
        }

        if(this.props.children) {
            children = React.Children.map(this.props.children, child => {
                          return React.cloneElement(child, {
                            visible: this.state.showChildren
                        });
                      });
        }
        
        return (
            <div className="div-menu-item noselect" onClick={this.handleClick}>
                <div className={buttonClass} data-text={this.props.label}>
                    {this.props.label}
                </div>
                {children}
            </div>
        );
    }

}
class MenuItemChildContainer extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {

        let classes = "div-menu-item-child-container noselect";

        if(this.props.visible) {
            classes += " visible";
        }

        return <div className={classes}>{this.props.children} {this.props.loggedIn}</div>;
    }
}

function Link(props) {
    return (
        <a className='link'>{props.children}</a>
    );
}
function Blurb(props) {
    return (
        <div className='blurb'>{props.children}</div>
    );
}
function Note(props) {
    return (
        <div className='note'>{props.children}</div>
    );
}
ReactDOM.render(
    <MainApp />,
    document.getElementById("root")
);