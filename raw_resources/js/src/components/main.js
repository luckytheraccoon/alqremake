import React from "react";
import ReactDOM from "react-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import mainMenuItems from "../data/mainMenu";
import fetchMainContent from "../data/mainContent";

class MainContainer extends React.PureComponent {

    constructor(props) {
        super(props);
        this.changeContent = this.changeContent.bind(this);
        this.state = {contentId:"home"};
    }

    changeContent(newContentId) {
        if(newContentId != this.state.contentId) {
            this.setState({contentId:newContentId});
        }
    }

    render() {
        return (
            <div className="div-main">
                <div className="div-header-images-1"></div>
                <Header />
                <HeaderBar changeContentAction={this.changeContent} />
                <Sidebar />
                <MainContent changeContentAction={this.changeContent} contentId={this.state.contentId} />
                <Footer />
            </div>
        );
    }
}

function Header() {
    return (
        <DivContainer classes="div-header">
            <div className="div-header-images-2"></div>
            <div className="div-header-images-3"></div>
            <div className="div-header-images-4"></div>
            <div className="div-header-images-5"></div>
            <div className="div-header-images-6"></div>
            <div className="div-header-images-7"></div>
        </DivContainer>
    );
}

class InnerLink extends React.PureComponent {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.props.clickAction(this.props.contentId);
    }

    render() {
        return (
            <a onClick={this.handleClick} className="link">{this.props.children}</a>
        );
    }
}

class HeaderBar extends React.PureComponent {
    
    constructor(props) {
        super(props);
        this.changeContentAction = this.changeContentAction.bind(this);
    }

    changeContentAction(contentId) {
        this.props.changeContentAction(contentId);
    }

    render() {

        const menuItems = mainMenuItems(this.changeContentAction).map((item) => {
            let children;
            if(item.children) {
                children = (
                    <MenuItemChildContainer width={item.width}>
                        {item.children}
                    </MenuItemChildContainer>
                );
            }
            
            return(    
                <MenuItem contentId={item.contentId} changeContentAction={this.changeContentAction} id={item.id} key={item.id} label={item.text}>
                    {children}
                </MenuItem>
            );
        });

        return (
            <DivContainer classes="div-headerbar">
                <div className="div-headerbar-across"></div>
                {menuItems}
            </DivContainer>
        );
    }
}

class MainContent extends React.PureComponent {
    
    constructor(props) {
        super(props);
    }

    render() {
        let contentComp = [];

        switch(this.props.contentId) {
            case "home":
                for (var i = 0; i < 6; i++) {
                    contentComp.push(<MainContentItem key={i} contentChangeAction={this.props.changeContentAction} contentData={fetchMainContent(i)} />);
                }
                break;
            default:
                contentComp.push(<MainContentItem key={this.props.contentId} contentChangeAction={this.props.changeContentAction} contentData={fetchMainContent(this.props.contentId)} />);
        }

        return (
            <DivContainer classes="div-maincontent">
                {contentComp}
            </DivContainer>
        );
    }
}
function MainContentItem(props) {
    let content = props.contentData;
    let contentChangeAction = props.contentChangeAction;
    return (
        <div>
            <div className="title"><InnerLink clickAction={contentChangeAction} contentId={content.id}>{content.title}</InnerLink></div>
            <div className="date">{content.date}</div>
            <div className="intro">{content.intro}</div>
            <div className="readMoreLink"><InnerLink clickAction={contentChangeAction} contentId={content.id}>Ler Mais</InnerLink></div>
        </div>
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


function DivContainer(props) {
    let className = "";
    if(typeof props.classes != "undefined") {
        className = props.classes + " ";
    }
    className = className + "div-container";
    return <div className={className}>{props.children}</div>;
}
function Alink(props) {
    return (
        <a href={props.url} className="link">{props.children}</a>
    );
}
function Blurb(props) {
    return (
        <div className="blurb">{props.children}</div>
    );
}
function Note(props) {
    return (
        <div className="note">{props.children}</div>
    );
}

class MenuItem extends React.PureComponent {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.state = {showChildren:false};
    }

    handleClick(event) {

        if(typeof this.props.contentId == "number" || typeof this.props.contentId == "string") {
            this.props.changeContentAction(this.props.contentId);
            return;
        }

        let thisElement = event.target;

        this.setState(function (prevState) {
            let newState = !prevState.showChildren;

            if (this.props.children) {
                if(thisElement.nextSibling) {
                    let childContainer = thisElement.nextSibling;
                    childContainer.style.left = -130 + (thisElement.offsetWidth/2) + "px";
                    childContainer.style.position = "relative";
                    childContainer.style.display = "block";
                }
            }

            if(newState) {
                document.addEventListener("click", this.handleClickOutside, true);
            }

            return {
                showChildren: newState
            };
        });
        
    }

    handleClickOutside(event) {
        const domNode = ReactDOM.findDOMNode(this);

        if ((!domNode || !domNode.contains(event.target)) || event.target.tagName === "A") {
            document.removeEventListener("click", this.handleClickOutside, true);
            this.setState({showChildren: false});
        }
    }
    
    render() {

        let buttonClass = "div-menu-item-button noselect";
        let children;

        if(this.state.showChildren) {
            children = this.props.children;
            buttonClass += " selected";
        }

        
        return (
            <div className="div-menu-item">
                <div className={buttonClass} onClick={this.handleClick} data-text={this.props.label}>
                    {this.props.label}
                </div>

                <ReactCSSTransitionGroup 
                    transitionName="menuChildren" 
                    transitionEnterTimeout={350} 
                    transitionLeaveTimeout={350}>
                    {children}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
class MenuItemChildContainer extends React.PureComponent {

    render() {
        return (
            <div className="div-menu-item-child-container">
                <div className="div-inner-container">
                    {this.props.children}
                    {this.props.loggedIn}
                </div>
            </div>
        );
    }
}


export { MainContainer, Alink, Blurb, Note, InnerLink };