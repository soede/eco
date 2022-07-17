import React from 'react';

import '../css/LearnPages.css';
import { Panel, Div, PanelHeader, Spacing, Button, Text, PanelHeaderBack, Title, TabsItem, Tabs, HorizontalCell, HorizontalScroll, PanelHeaderButton  } from '@vkontakte/vkui';



const Domestic = () => {


	return(
        <Div>

        <Title className='headerPage' level="1"> Бытовая техника</Title>
        <Spacing size={16} />
        <Title  className='forColor' level="2" > Что можно сдать?</Title>
        <Spacing size={8} />
        <Text>
            <div><span class="forColor">•</span> Компьютерная техника и электронное оборудование</div>
            <br />
            <div><span class="forColor">•</span> Телефонные аппараты и мобильные телефоны</div>
            <br /> 
            <div><span class="forColor">•</span> Кондиционеры, вентиляторы и обогреватели</div>
            <br />
            <div><span class="forColor">•</span> Электронные расходные материалы (схемы, платы, картриджи с приставок)</div>
            <br />
            <div><span class="forColor">•</span> 05 - РР - ПП - С/05 - С/РР</div>
            <br />
        </Text>

        <Spacing size={16} />
        <Title  className='forColor' level="2" > Куда сдавать?</Title>
        <Spacing size={8} />
        <Text>
        <div><span class="forColor">•</span> Фольгированный пластик </div>
            <br />
            <div><span class="forColor">•</span> Пункты приема</div>
            <br />
            <div><span class="forColor">•</span>Волонтерские организации </div>
            <br />
            <div><span class="forColor">•</span> Магазины бытовой техники (акции)</div>
            <br />


        </Text> 

    </Div>
    )
    }
export default Domestic;