import React from 'react';


import '../css/LearnPages.css';
import { Panel, Div, PanelHeader, Spacing, Button, Text, PanelHeaderBack, Title, TabsItem, Tabs, HorizontalCell, HorizontalScroll, PanelHeaderButton  } from '@vkontakte/vkui';






const Packaging = () => {


	return(
        <Div>

        <Title className='headerPage' level="1"> Упаковки</Title>
        <Spacing size={16} />
        <Title  className='forColor' level="2" > Что можно сдать?</Title>
        <Spacing size={8} />
        <Text>
            <div><span class="forColor">•</span> Пакеты: фасовочные, майки, зиплок, для покупок</div>
            <br />
            <div><span class="forColor">•</span> Плёнка: пузырчатая, парниковая, стрейч, сумки из
            спандбонда, «сахарные» мешки и аналогичные
            мешки, сумки, вспененный полиэтилен, с
            маркировками:.</div>
            <br /> 
            <div><span class="forColor">•</span> 02 - НDРЕ - ПВД - С/02 - С/НDРЕ  </div>
            <br />
            <div><span class="forColor">•</span> 04 - LDРЕ - ПНД - С/04 - С/LDРЕ</div>
            <br />
            <div><span class="forColor">•</span> 05 - РР - ПП - С/05 - С/РР</div>
            <br />
        </Text>

        <Spacing size={16} />
        <Title  className='forColor' level="2" > Не принимают от физических лиц: </Title>
        <Spacing size={8} />
        <Text>
        <div><span class="forColor">•</span> Фольгированный пластик </div>
            <br />
            <div><span class="forColor">•</span> «Биоразлагаемый» пластик</div>
            <br />
            <div><span class="forColor">•</span> Поливинилхлорид (PVC/ПВХ/ОЗ)</div>
            <br />
            <div><span class="forColor">•</span> Пластик 07</div>
            <br />


        </Text>

        <Spacing size={16} />
        <Title  className='forColor' level="2" > Как подготовить к переработке?</Title>
        <Spacing size={8} />
        <Text> Разделить по типу пластика согласно маркировке. </Text>
        


    </Div>
    )
    }
export default Packaging;