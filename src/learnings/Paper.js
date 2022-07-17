import React, { useEffect, useState } from 'react';

 
import '../css/LearnPages.css';
import { Panel, Div, PanelHeader, Spacing, Button, Text, PanelHeaderBack, Title, TabsItem, Tabs, HorizontalCell, HorizontalScroll, PanelHeaderButton  } from '@vkontakte/vkui';





const Paper = () => {


	return(
        <Div>
            <Title className='headerPage' level="1"> Бумага</Title>
            <Spacing size={16} />
            <Title  className='forColor' level="2" > Что можно сдать?</Title>
            <Spacing size={8} />
            <Text weight="2">Газеты , книги , офисную бумагу , альбомы , тетради и листовки , а также коробки и картон , в том числе гофрированный . Бумажную упаковку с маркировками 20 , 21 и 22 (PAP) .</Text>
            <Spacing size={16} />
            <Title className='forColor' > Что нелья сдавать?</Title>
            <Spacing size={8} />
            <Text>Фотографии , чеки и другую термобумагу , туалетную бумагу и салфетки , бумагу для запекания , а также грязную - жирную или масляную . Бумажные стаканчики и любую бумажную одноразовую посуду , которая покрыта пленкой . </Text>
            <Spacing size={16} />
            <Title className='forColor' > Как подготовить к переработке?</Title>
            <Spacing size={8} /> 
            <Text>
                <Text className='forColor'>•</Text> Вытащить металлические элементы , убрать пластик и скотч.
                <br />
                <Text className='forColor'>•</Text> Проверить , не грязная ли бумага , сложить в кипы и перевязать их веревкой . 
                <br />
                <Text className='forColor'>•</Text> Проверить , примут ли у вас изделие , можно надорвав его - если внутри бумага белая , то сдавать можно .
            </Text>
        </Div>
        

        
    )
    }
export default Paper;
