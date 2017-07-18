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

    handleClick(event) {

        if (this.props.children) {
            
            let thisElement = event.target;
            let childContainer = event.target.nextSibling;

            childContainer.style.left = (0-(childContainer.offsetWidth/2)) + (thisElement.offsetWidth/2) + "px";

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

    constructor(props) {
        super(props);
    }
    
    render() {

        let classes = "div-menu-item-child-container";

        if(this.props.visible) {
            classes += " visible";
        }

        let style = {width:"230px"};

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