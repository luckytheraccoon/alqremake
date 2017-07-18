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

const userReducer = function(state={}, action) {
    switch(action.type) {
        case "CHANGE_NAME": {
            state = {...state, name: action.payload};
            break;
        }

        case "CHANGE_AGE": {
            state = {...state, age: action.payload};
            break;
        }

        case "E": {
            throw new Error("XXXXXX");
        }
    }
    return state;
};

const tweetsReducer = function(state=[], action) {
    return state;
};

const reducer = combineReducers({
    user: userReducer,
    tweets: tweetsReducer
});

const logger = (store)=>(next)=>(action)=>{
    console.log("action fired", action);
    next(action);
};

const error = (store)=>(next)=>(action)=>{
    try {
        next(action);
    } catch(e) {
        console.log("AAAAHHHH", e);
    }
};

const middleware = applyMiddleware(logger, error);

const store = createStore(reducer,{
    user: {
        name: "will",
        age: 35
    },
    tweets: []
}, middleware);


store.subscribe(() => {
    console.log("store changed", store.getState());
});

store.dispatch({type: "CHANGE_NAME", payload: "Will"});
store.dispatch({type: "CHANGE_AGE", payload: 35});
store.dispatch({type: "CHANGE_AGE", payload: 36});
store.dispatch({type: "E", payload: 36});

