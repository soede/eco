import React from 'react';

import '../css/LearnPages.css';
import { Panel, Div, PanelHeader, Spacing, Button, Text, PanelHeaderBack, Title, TabsItem, Tabs, HorizontalCell, HorizontalScroll, PanelHeaderButton  } from '@vkontakte/vkui';





const Clothing = () => {


	return(
        <Div>

            <Title className='headerPage' level="1"> Одежда</Title>
            <Spacing size={16} />
            <Title  className='forColor' level="2" > Что можно сдать?</Title>
            <Spacing size={8} />
            <Text>

            Текстиль из натуральных волокон в очень плохом
            состоянии, ветошь. Вещи, которые сохранили товарный
            вид лучше отдать на благотворительность.


            </Text>

            <Spacing size={16} />
            <Title  className='forColor' level="2" > Как подготовить к переработке?</Title>
            <Spacing size={8} />
            <Text>

            <div><span class="forColor">•</span>В большинстве пунктов принимают только чистые
            вещи, так что даже рваную одежду придется
            постирать.</div>

            <div><span class="forColor">•</span>Для спецодежды существуют отдельные пункты
            приема. Стирать ее не надо, так как существуют
            специальные методы очистки.</div>

            </Text>

        </Div>
    )
    }
export default Clothing;