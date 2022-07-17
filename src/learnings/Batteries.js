import React from 'react';


import '../css/LearnPages.css';
import { Panel, Div, PanelHeader, Spacing, Button, Text, PanelHeaderBack, Title, TabsItem, Tabs, HorizontalCell, HorizontalScroll, PanelHeaderButton  } from '@vkontakte/vkui';





const Batteries = () => {


	return(
        <Div>
        <Title className='headerPage' level="1"> Батарейки</Title>
        <Spacing size={16} />
        <Spacing size={16} />
        <Title  className='forColor' level="2" > Что можно сдать?</Title>
        <Spacing size={8} />
        <Text> 
        «Пальчиковые» батарейки, батарейки-«таблетки»,
        аккумуляторы от телефонов, ноутбуков и т.п. (не везде)
        </Text>

        <Spacing size={16} />
        <Title  className='forColor' level="2" >Что делать с поврежденной батарейкой?</Title>
        <Spacing size={8} />
        <Text>

        Автомобильные аккумуляторы, аккумуляторы от UPS/
        ИБП (принимают отдельно в пунктах при автосервисах
        и магазинах ). НЕ выбрасывайте целую или
        поврежденную батарейку в общий контейнер. Если
        батарейка повреждена, поместите ее в отдельную
        герметичную тару.


    
        

        </Text>

        <Spacing size={16} />
        <Title  className='forColor' level="2" > Как подготовить к переработке?</Title>
        <Spacing size={8} />
        <Text>

            <div><span class="forColor">•</span> Проверьте, не повреждена ли батарейка.</div>
            <br />
            <div><span class="forColor">•</span> Поместите батарейки в отдельную тару, а затем в контейнер для приема.</div>
            <br />  
        </Text>



        
        </Div>
    )
    }
export default Batteries;