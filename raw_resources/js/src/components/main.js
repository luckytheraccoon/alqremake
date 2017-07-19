import React from "react";
import ReactDOM from "react-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { connect } from "react-redux";
import { fetchMainMenuItems } from "../actions/mainMenuActions";
import { fetchContent } from "../actions/contentActions";

export default function MainContainer() {
    return (
        <div className="div-main">
            <Header />
            <HeaderBar />
            <Sidebar />
            <MainContent />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <DivContainer classes="div-header" />
    );
}


@connect((store)=>{
    return {
        mainMenuItems: store.mainMenuItems.mainMenuItems
    };
})
class HeaderBar extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchMainMenuItems());
    }

    render() {

        const { mainMenuItems } = this.props;

        const menuItems = mainMenuItems.map((item) => {
            let children;
            if(item.children) {
                children = (
                    <MenuItemChildContainer width={item.width}>
                        {item.children}
                    </MenuItemChildContainer>
                );
            }
            
            return(    
                <MenuItem id={item.id} key={item.id} label={item.text}>
                    {children}
                </MenuItem>
            );
        });

        return (
            <DivContainer classes="div-headerbar">
                <div className='div-headerbar-across'></div>
                {menuItems}
            </DivContainer>
        );
    }
}

@connect((store)=>{
    return {
        content: store.content.content
    };
})
class MainContent extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchContent());
    }

    render() {

        const { content } = this.props;

        return (
            <DivContainer classes="div-maincontent">
                <div>{content.id}</div>
                <div>{content.title}</div>
                <div>{content.excerpt}</div>
                <div>{content.body}</div>
                <div>{content.date}</div>
                <div>{content.author}</div>
            </DivContainer>
        );
    }
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


function DivContainer(props) {
    let className = "";
    if(typeof props.classes != "undefined") {
        className = props.classes + " ";
    }
    className = className + "div-container";
    return <div className={className}>{props.children}</div>;
}
function Link(props) {
    return (
        <a href={props.url} className='link'>{props.children}</a>
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

class MenuItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.state = {showChildren:false};
    }


    handleClick(event) {

        if (this.props.children) {
            
            let thisElement = event.target;
            let childContainer = event.target.nextSibling;

            childContainer.style.left = (0-(childContainer.offsetWidth/2)) + (thisElement.offsetWidth/2) + "px";
            //childContainer.style.top = (0 - (childContainer.offsetHeight + 260 )) + "px";

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

        let buttonClass = "div-menu-item-button noselect";
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
            <div className="div-menu-item" onClick={this.handleClick}>
                <div className={buttonClass} data-text={this.props.label}>
                    {this.props.label}
                </div>
                {children}
            </div>
        );
    }
}
class MenuItemChildContainer extends React.Component {

    render() {

        let classes = "div-menu-item-child-container";

        if(this.props.visible) {
            classes += " visible";
        }

        let style = {width:this.props.width};

        return (
            <div style={style} className={classes}>
                <div className="div-inner-container">
                    {this.props.children}
                    {this.props.loggedIn}
                </div>
            </div>
        );
    }
}

export { Link, Blurb, Note };