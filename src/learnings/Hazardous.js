import React from 'react';



import '../css/LearnPages.css';
import { Panel, Div, PanelHeader, Spacing, Button, Text, PanelHeaderBack, Title, TabsItem, Tabs, HorizontalCell, HorizontalScroll, PanelHeaderButton  } from '@vkontakte/vkui';





const Hazardous = () => {


	return(
        <Div>
        <Title className='headerPage' level="1"> Опасные отходы</Title>
        <Spacing size={16} />
        <Text>Эти отходы нельзя выбрасывать в общий контейнер, для
        их переработки и утилизации есть специальные пункты
        приема.
        </Text> 
        <Spacing size={16} />
        <Title  className='forColor' level="2" >Что нужно сдать?</Title>
 


        <Text>
            <div><span class="forColor">•</span> Лекарства</div>
            <br />
            <div><span class="forColor">•</span> Градусники</div>
            <br /> 
            <div><span class="forColor">•</span> Аккумуляторы </div>
            <br />
            <div><span class="forColor">•</span> Баллончики от аэрозолей</div>
            <br /> 
            <div><span class="forColor">•</span> Бытовая техника</div>
            <br />
            <div><span class="forColor">•</span> Картриджи</div>
            <br /> 
            <div><span class="forColor">•</span> Шины</div>
            <br />
        </Text>
        


    </Div>
    )
    }
export default Hazardous;