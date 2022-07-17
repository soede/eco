import React, { useEffect, useState } from 'react';

import '../css/LearnPages.css';
import { Panel, Div, PanelHeader, Spacing, Button, Text, PanelHeaderBack, Title, TabsItem, Tabs, HorizontalCell, HorizontalScroll, PanelHeaderButton  } from '@vkontakte/vkui';




const Plastic = () => {


	return(
        <Div>
            <Title className='headerPage' level="1"> Пластик</Title>
            <Spacing size={16} />
            <Title  className='forColor' level="2" >Маркировка</Title>
            <Spacing size={8} />
            <Text>
                <div><span class="forColor">•</span>Полиэтилентерефталат — РЕТЕ (1).</div>
                <br />
                <div><span class="forColor">•</span> Высокоплотный полиэтилен — РЕНВ или НОРЕ (2). </div>
                <br />
                <div><span class="forColor">•</span> Высокоплотный полиэтилен — РЕНВ или НОРЕ (2). </div>
                <br />
                <div><span class="forColor">•</span> Поливинилхлорид — РVС (3)*. </div>
                <br /> 
                <div><span class="forColor">•</span> Низкоплотный полиэтилен — LDPE или REBD (4). </div>
                <br />
                <div><span class="forColor">•</span>Полипропилен — РР (5). </div>
                <br />
                <div><span class="forColor">•</span>Полистирол — РS (6). </div>
                <br />
                <div><span class="forColor">•</span>Все другие виды пластика — OTHER-О (7)*. </div>
                <br />
            </Text>
            <Text className='warning'>(*) Пластик с маркировками «З» и «7» в нашей стране не перерабатывается. </Text>
            <Spacing size={16} /> 
            <Title className='forColor' level="2">Что можно сдать?</Title>
            <Spacing size={8} />
            <Text>
            Пластиковые бутылки, канистры, и иные предметы с маркировкой 01 ПЭТ/РЕТ, 02 ПНД/HDPE. 
            Пластик с маркировкой 4, 5 и б сложнее перерабатывается и принимается не везде. 
            Лучше уточнять возможность его приема на пунктах переработки. 
            </Text>
            <Spacing size={16} /> 
            <Title className='forColor' level="2">Что нельзя сдать?</Title>
            <Spacing size={8} />
            <Text>
            Пластик с маркировками 3 (ПВХ), 7 (О, Other), 8 и АВS, а
            также любой биоразлагаемый пластик,
            фольгированную упаковку, тюбики и мягкие упаковки от
            майонеза и других соусов.

            </Text>
            


        </Div>
        
    )
    }
export default Plastic;
