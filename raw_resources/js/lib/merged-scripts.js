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
        {id:"menuItem_1", text: "Home"},
        {id:"menuItem_2", text: "Meu Perfil"},
        {id:"menuItem_3", text: "Artigos e Notícias"},
        {id:"menuItem_4", text: "Seminários"},
        {id:"menuItem_5", text: "Consultas", children: [
            <MenuItemChildContainer key="menuItem_5-inner">
                <Link url="http://alquimiaalimentar.com/index.php?option=com_content&task=view&id=10&Itemid=8"> Aconselhamento Alimentar </Link>
                <Link url="http://alquimiaalimentar.com/index.php?option=com_content&task=view&id=354&Itemid=43"> Hipnoterapia </Link>
            </MenuItemChildContainer>
        ]},
        {id:"menuItem_6", text: "Locais de Trabalho", children: [
            <MenuItemChildContainer width="230px" key="menuItem_6-inner">
                <Blurb> <strong>Associação Pétalas Cósmicas</strong><br />Lisboa - 211 561 754 </Blurb>
                <Blurb> <strong> <Link url="http://www.equilibrio-holistico.com/">Equilibrio Holistico</Link></strong><br />Telheiras - 217 574 531 </Blurb>
                <Blurb> <strong> <Link url="https://www.facebook.com/almamundi.welnesscenter">Almamundi Spa</Link></strong><br />Fernão Ferro - 969 981 527 </Blurb>
                <Blurb> <strong> <Link url="http://tantralounge-porto.tk">Tantra Lounge</Link></strong><br />Porto - 220 999 428 </Blurb>
                <Blurb> <strong>E-Mail:</strong> isacosta1963@gmail.com </Blurb>
            </MenuItemChildContainer>
        ]},
        {id:"menuItem_7", text: "Parceiros", children: [
            <MenuItemChildContainer key="menuItem_7-inner">
                <Link url="http://commedida.webnode.pt/">ComMedida</Link>
                <Link url="http://leitedaterra.blogspot.pt/">Leite Da Terra</Link>
                <Link url="http://www.biovivos.pt/">BioVivos</Link>
                <Link url="http://www.facebook.com/loveingreenjuicers">Love In Green</Link>
                <Link url="http://alquimiaalimentar.com/index.php?option=com_content&amp;task=view&amp;id=381">Equilíbrio Holístico</Link>
            </MenuItemChildContainer>
        ]},
        {id:"menuItem_8", text: "Reflexões", children: [
            <MenuItemChildContainer width="230px" key="menuItem_8-inner">
                <Note> Documentos PowerPoint que neles contêm reflexões para desfrutar calmamente. </Note>
                <Link url="downloads/ComooravaGandhi.pps">Reflexão "Como Orava Ghandi"</Link>
                <Link url="downloads/VoodoGanso.pps">Reflexão "Voo do Ganso"</Link>
                <Link url="downloads/Girassol.pps">Reflexão "Girassol"</Link>
            </MenuItemChildContainer>
        ]}
    ];

    const menuItems = items.map((item) =>
        <MenuItem id={item.id} key={item.id} label={item.text}>
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
ReactDOM.render(
    <MainApp />,
    document.getElementById("root")
);