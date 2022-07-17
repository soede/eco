import React from 'react';


import '../css/LearnPages.css';
import { Panel, Div, PanelHeader, Spacing, Button, Text, PanelHeaderBack, Title, TabsItem, Tabs, HorizontalCell, HorizontalScroll, PanelHeaderButton  } from '@vkontakte/vkui';





const Bulb = () => {


	return(
        <Div>

        <Title className='headerPage' level="1"> Лампочки</Title>
        <Spacing size={16} />
        <Title  className='forColor' level="2" > Что можно сдать?</Title>
        <Spacing size={8} />
        <Text>

        Лампы накаливания, галогенные, светодиодные,
        ртутные (люминесцентные) - не везде.


        </Text>

        <Spacing size={16} />
        <Title  className='forColor' level="2" > Что делать с разбитой лампочкой?</Title>
        <Spacing size={8} />
        <Text>

        Если вы повредили ртутную лампочку, тщательно
        соберите крупные осколки, мелкие части при помощи
        скотча или салфеток, обработайте помещение хлорным
        раствором и проветрите. Утилизировать разбитую
        лампу можно так же, как и целую.



        </Text>

        <Spacing size={16} />
        <Title  className='forColor' level="2" > Как подготовить к переработке?</Title>
        <Spacing size={8} />
        <Text>
            <div><span class="forColor">•</span>Ртутные лампы (люминесцентные) упаковать в
            герметичный пластиковый пакет.</div>
            <br />
            <div><span class="forColor">•</span>Обычные лампочки обернуть ветошью или бумагой
            и поместить в коробку, чтобы не разбились.</div>
            <br /> 
        </Text>
        


    </Div>
    )
    }
export default Bulb;