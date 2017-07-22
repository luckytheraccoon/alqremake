import React from "react";
import {InnerLink, Alink, Blurb, Note} from "../components/main";
export default (contentChangeAction) => {

	return [{id:"menuItem_1", text: "Home", contentId:3},
            {id:"menuItem_2", text: "Meu Perfil"},
            {id:"menuItem_3", text: "Artigos e Notícias"},
            {id:"menuItem_4", text: "Seminários"},
            {id:"menuItem_5", text: "Consultas", children: [
                <div key="menuItem_5-inner">
                    <InnerLink clickAction={contentChangeAction} contentId="1"> Aconselhamento Alimentar </InnerLink>
                    <InnerLink clickAction={contentChangeAction} contentId="2"> Hipnoterapia </InnerLink>
                </div>
            ]},
            {id:"menuItem_6", text: "Locais de Trabalho", children: [
                <div key="menuItem_6-inner">
                    <Blurb> <strong>Associação Pétalas Cósmicas</strong><br />Lisboa - 211 561 754 </Blurb>
                    <Blurb> <strong> <Alink url="http://www.equilibrio-holistico.com/">Equilibrio Holistico</Alink></strong><br />Telheiras - 217 574 531 </Blurb>
                    <Blurb> <strong> <Alink url="https://www.facebook.com/almamundi.welnesscenter">Almamundi Spa</Alink></strong><br />Fernão Ferro - 969 981 527 </Blurb>
                    <Blurb> <strong> <Alink url="http://tantralounge-porto.tk">Tantra Lounge</Alink></strong><br />Porto - 220 999 428 </Blurb>
                    <Blurb> <strong>E-Mail:</strong> isacosta1963@gmail.com </Blurb>
                </div>
            ]},
            {id:"menuItem_7", text: "Parceiros", children: [
                <div key="menuItem_7-inner">
                    <Alink url="http://commedida.webnode.pt/">ComMedida</Alink>
                    <Alink url="http://leitedaterra.blogspot.pt/">Leite Da Terra</Alink>
                    <Alink url="http://www.biovivos.pt/">BioVivos</Alink>
                    <Alink url="http://www.facebook.com/loveingreenjuicers">Love In Green</Alink>
                    <Alink url="http://alquimiaalimentar.com/index.php?option=com_content&amp;task=view&amp;id=381">Equilíbrio Holístico</Alink>
                </div>
            ]},
            {id:"menuItem_8", text: "Reflexões", children: [
                <div key="menuItem_8-inner">
                    <Note> Documentos PowerPoint que neles contêm reflexões para desfrutar calmamente. </Note>
                    <Alink url="downloads/ComooravaGandhi.pps">Reflexão "Como Orava Ghandi"</Alink>
                    <Alink url="downloads/VoodoGanso.pps">Reflexão "Voo do Ganso"</Alink>
                    <Alink url="downloads/Girassol.pps">Reflexão "Girassol"</Alink>
                </div>
            ]}];
}