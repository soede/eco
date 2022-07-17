import React from 'react';


import '../css/LearnPages.css';
import { Panel, Div, PanelHeader, Spacing, Button, Text, PanelHeaderBack, Title, TabsItem, Tabs, HorizontalCell, HorizontalScroll, PanelHeaderButton  } from '@vkontakte/vkui';






const Metal = () => {


	return(
        <Div>

        <Title className='headerPage' level="1"> Металл</Title>
        <Spacing size={16} />
        <Title  className='forColor' level="2" > Что можно сдать?</Title>
        <Spacing size={8} />
        <Text>

        Консервные и алюминиевые банки из-под напитков,
        металлические крышки и другие цельнометаллические
        предметы. Реже принимают фольгу, одноразовые
        алюминиевые контейнеры и баллончики из-под
        аэрозолей.


        </Text>

        <Spacing size={16} />
        <Title  className='forColor' level="2" > Что нельзя сдать?</Title>
        <Spacing size={8} />
        <Text>

        Пластиковая упаковка с металлизированым слоем и
        фольгой, газовые баллоны, потенциально опасные
        изделия ( радиоактивные, зараженные,
        использовавшиеся для хранения ядов, лекарств ит.д.)


        </Text>

        <Spacing size={16} />
        <Title  className='forColor' level="2" > Как подготовить к переработке?</Title>
        <Spacing size={8} />
        <Text>
            <div><span class="forColor">•</span>Помыть, высушить, в идеале, снять этикетки.</div>
            <br />
            <div><span class="forColor">•</span>Если возможно, уменьшить в объеме (смять).</div>
            <br /> 
        </Text>
        


    </Div>
    )
    }
export default Metal;