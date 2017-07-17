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
