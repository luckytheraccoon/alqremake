import React from "react";
import ReactDOM from "react-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import mainMenuItems from "../data/mainMenu";
import fetchMainContent from "../data/mainContent";

class MainContainer extends React.PureComponent {

    constructor(props) {
        super(props);
        this.changeContent = this.changeContent.bind(this);
        this.changePage = this.changePage.bind(this);
        this.state = {contentId:"news-list", previousContendId:null, pageId:"home", previousPageId:null};
    }

    changePage(newPageId) {
        if(newPageId != this.state.pageId) {
            this.setState({pageId:newPageId, previousPageId:this.state.pageId});
        }
    }

    changeContent(newContentId) {
        if(newContentId != this.state.contentId) {
            this.setState({contentId:newContentId, previousContendId:this.state.contentId});
        }
    }

    render() {

        let glyphIcons = [
            {id:"triangle-left", targetId:"news-list", onClick:this.changeContent}, 
            {id:"menu-hamburger", targetId:"mobile-menu", onClick:this.changePage}, 
            {id:"remove", targetId:this.state.previousPageId, onClick:this.changePage}
        ];
        let iconList = glyphIcons.map((iconObj) =>
            <Glyphicon key={iconObj.id} iconSuffix={iconObj.id} targetId={iconObj.targetId} clickAction={iconObj.onClick} />
        );

        let mobileIcons = [];
        let page;

        switch(this.state.pageId) {
            case "mobile-menu":
                mobileIcons = [iconList[2]];
                break;
            default:
                if(typeof this.state.contentId === "number") {
                    mobileIcons.push(iconList[0]);
                }
                mobileIcons.push(iconList[1]);
        }

        if(this.state.pageId === "home") {
            page = (
                <div>
                    <MainContent changeContentAction={this.changeContent} contentId={this.state.contentId} />
                    <Footer />
                </div>
            );
        } else {
            page = ( 
                <div>
                    Yoyoyoyyo
                </div>
            );
        }

        return (
            <div className="div-main">
                <DivContainer classes="div-header">
                    <Glyphicon iconSuffix='user' />
                    ALQUIMIA ALIMENTAR
                </DivContainer>
                <DivContainer classes="div-mobile-top-menu">
                    {mobileIcons}
                </DivContainer>
                {page}
            </div>
        );
    }
}

class Glyphicon extends React.PureComponent {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.props.clickAction(this.props.targetId);
    }

    render() {
        return <span onClick={this.handleClick} className={"glyphicon glyphicon-" + this.props.iconSuffix} ></span>;
    }
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
                <MenuItem alternateLabel={item.alternateLabel} alternateComponent={item.alternateComponent} contentId={item.contentId} changeContentAction={this.changeContentAction} id={item.id} key={item.id} label={item.label}>
                    {children}
                </MenuItem>
            );
        });

        return (
            <DivContainer classes="div-headerbar">
                <div className="div-headerbar-across"></div>
                <div className="div-headerbar-menu-container">
                    {menuItems}
                </div>
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
            case "news-list":
                for (var i = 0; i < 6; i++) {
                    contentComp.push(<MainContentItem key={i} contentChangeAction={this.props.changeContentAction} contentData={fetchMainContent(i)} />);
                }
                break;
            case "mobile-menu":
                contentComp.push(<MainContentItem key={this.props.contentId} contentChangeAction={this.props.changeContentAction} contentData={fetchMainContent(this.props.contentId)} />);
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
                    //reset the element's left parameter so it doesnt interfere 
                    //with the offset calculation
                    childContainer.style.left = 0; 
                    //the offset is a calculated value to get the box to position
                    //perfectly at the center of the clicked button
                    let offset = -130 + (thisElement.offsetWidth/2);
                    //now lets find out if the box is completely visible according
                    //to the window width, for that, lets get the current left and right bounding rect
                    let elemLeft = childContainer.getBoundingClientRect().left;
                    let elemRight = childContainer.getBoundingClientRect().right - offset;
                    //check then if the element is completely visible or not
                    let isCompletelyVisible = (elemLeft >= 0) && (elemRight <= window.innerWidth);
                    //if it isnt, lets fix it by moving it further towards the left
                    if(!isCompletelyVisible) {
                        //first, how much of the element is not visible?
                        let elementOOB = elemRight - window.innerWidth;
                        //now add this to the offset value :)
                        //also add a bit of padding so its not glued to the edge
                        offset = offset - elementOOB - 10;
                    }
                    //actually position the elemnt, finally
                    childContainer.style.left = offset + "px";
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
        let alternate;
        let original;

        if(this.state.showChildren) {
            children = this.props.children;
            buttonClass += " selected";
        }

        if(this.props.alternateComponent) {
            buttonClass += " alternate";
            alternate = <div className="menu-item-alternate">{this.props.alternateComponent}</div>;
            original = <div className="menu-item-original">{this.props.label}</div>;
        } else if (this.props.alternateLabel) {
            buttonClass += " alternate";
            alternate = <div className="menu-item-alternate">{this.props.alternateLabel}</div>;
            original = <div className="menu-item-original">{this.props.label}</div>;
        } else {
            original = <div>{this.props.label}</div>;
        }

        
        return (
            <div id={this.props.id} className="div-menu-item">
                <div className={buttonClass} onClick={this.handleClick} data-alternate-label={this.props.alternateLabel} data-label={this.props.label}>
                    {alternate}
                    {original}
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