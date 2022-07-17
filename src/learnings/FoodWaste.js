import React from 'react';


import '../css/LearnPages.css';
import { Panel, Div, PanelHeader, Spacing, Button, Text, PanelHeaderBack, Title, TabsItem, Tabs, HorizontalCell, HorizontalScroll, PanelHeaderButton  } from '@vkontakte/vkui';





const FoodWaste = () => {


	return(
        <Div>

            <Title className='headerPage' level="1"> Пищевые отходы</Title>
            <Spacing size={16} />
            <Title  className='forColor' level="2" > Что можно сдать?</Title>
            <Spacing size={8} />
            <Text>

            Любые пищевые отходы, в т.ч. животного
            происхождения биоразлагаемые. Однако, большое их
            скопление в одном месте (на свалках) приводит к
            выработке метана, что чревато возгоранием мусорных куч.

            </Text>

            <Spacing size={16} />
            <Title  className='forColor' level="2" > Что можно сделать дома?</Title>
            <Spacing size={8} />
            <Text>

            Компостировать, но это подходит для тех, кто живёт
            или часто бывает загородом. Если есть специальная канализация, подойдёт
            диспоузер (измельчитель под раковину).

            </Text>

        </Div>
    )
    }
export default FoodWaste;