import React from 'react';


import '../css/LearnPages.css';
import { Panel, Div, PanelHeader, Spacing, Button, Text, PanelHeaderBack, Title, TabsItem, Tabs, HorizontalCell, HorizontalScroll, PanelHeaderButton  } from '@vkontakte/vkui';




const Glass = () => {


	return(
        <Div>

            <Title className='headerPage' level="1"> Стекло</Title>
            <Spacing size={16} />
            <Title  className='forColor' level="2" > Что можно сдать?</Title>
            <Spacing size={8} />
            <Text>

            Банки, бутылки, флаконы.
            Стеклоизделия, пригодные для повторного
            использования, имеют снизу маркировку GL70.

            </Text>

            <Spacing size={16} />
            <Title  className='forColor' level="2" > Что нельзя сдать?</Title>
            <Spacing size={8} />
            <Text>

            Автомобильные и оконные стекла, оптические стекла от
            очков, хрустальные изделия на свинцовой основе,
            лампочки, керамические, фаянсовые и фарфоровые
            изделия, кинескопы, банки от лекарств, битое стекло.


            </Text>

            <Spacing size={16} />
            <Title  className='forColor' level="2" > Как подготовить к переработке?</Title>
            <Spacing size={8} />
            <Text>
                <div><span class="forColor">•</span>Помыть, убрать металлические элементы, этикетку счищать не надо.</div>
                <br />
                <div><span class="forColor">•</span> Стеклотару сдают без пробок и крышек. </div>
                <br /> 
            </Text>
            


        </Div>
    )
    }
export default Glass;