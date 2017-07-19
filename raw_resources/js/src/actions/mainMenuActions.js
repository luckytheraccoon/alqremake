import { Link, Blurb, Note } from "../components/main";

export function fetchMainMenuItems() {
    return {
        type: "FETCH_MAIN_MENU_ITEMS_FULFILLED",
        payload: [
            {id:"menuItem_1", text: "Home"},
            {id:"menuItem_2", text: "Meu Perfil"},
            {id:"menuItem_3", text: "Artigos e Notícias"},
            {id:"menuItem_4", text: "Seminários"},
            {id:"menuItem_5", text: "Consultas", children: [
                <div key="menuItem_5-inner">
                    <Link url="http://alquimiaalimentar.com/index.php?option=com_content&task=view&id=10&Itemid=8"> Aconselhamento Alimentar </Link>
                    <Link url="http://alquimiaalimentar.com/index.php?option=com_content&task=view&id=354&Itemid=43"> Hipnoterapia </Link>
                </div>
            ]},
            {id:"menuItem_6", text: "Locais de Trabalho", children: [
                <div key="menuItem_6-inner">
                    <Blurb> <strong>Associação Pétalas Cósmicas</strong><br />Lisboa - 211 561 754 </Blurb>
                    <Blurb> <strong> <Link url="http://www.equilibrio-holistico.com/">Equilibrio Holistico</Link></strong><br />Telheiras - 217 574 531 </Blurb>
                    <Blurb> <strong> <Link url="https://www.facebook.com/almamundi.welnesscenter">Almamundi Spa</Link></strong><br />Fernão Ferro - 969 981 527 </Blurb>
                    <Blurb> <strong> <Link url="http://tantralounge-porto.tk">Tantra Lounge</Link></strong><br />Porto - 220 999 428 </Blurb>
                    <Blurb> <strong>E-Mail:</strong> isacosta1963@gmail.com </Blurb>
                </div>
            ]},
            {id:"menuItem_7", text: "Parceiros", children: [
                <div key="menuItem_7-inner">
                    <Link url="http://commedida.webnode.pt/">ComMedida</Link>
                    <Link url="http://leitedaterra.blogspot.pt/">Leite Da Terra</Link>
                    <Link url="http://www.biovivos.pt/">BioVivos</Link>
                    <Link url="http://www.facebook.com/loveingreenjuicers">Love In Green</Link>
                    <Link url="http://alquimiaalimentar.com/index.php?option=com_content&amp;task=view&amp;id=381">Equilíbrio Holístico</Link>
                </div>
            ]},
            {id:"menuItem_8", text: "Reflexões", children: [
                <div key="menuItem_8-inner">
                    <Note> Documentos PowerPoint que neles contêm reflexões para desfrutar calmamente. </Note>
                    <Link url="downloads/ComooravaGandhi.pps">Reflexão "Como Orava Ghandi"</Link>
                    <Link url="downloads/VoodoGanso.pps">Reflexão "Voo do Ganso"</Link>
                    <Link url="downloads/Girassol.pps">Reflexão "Girassol"</Link>
                </div>
            ]}
        ]
    };
}