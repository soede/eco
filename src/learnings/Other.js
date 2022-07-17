import React from 'react';

import '../css/LearnPages.css';
import { Panel, Div, PanelHeader, Spacing, Button, Text, PanelHeaderBack, Title, TabsItem, Tabs, HorizontalCell, HorizontalScroll, PanelHeaderButton  } from '@vkontakte/vkui';






const Other = () => {


	return(
        <Div>
        <Title className='headerPage' level="1"> Другое</Title>
        <Spacing size={16} />
        <Text>Данные виды мусора не подлежат переработке в нашей
        стране или могут быть переработаны лишь частично.
        приема.
        </Text>


        <Text>
            <div><span class="forColor">•</span> Другой пластик</div>
            <br />
            <div><span class="forColor">•</span> Шарики</div>
            <br /> 
            <div><span class="forColor">•</span> Пластиковые карты</div>
            <br />
            <div><span class="forColor">•</span> Резина</div>
            <br /> 
            <div><span class="forColor">•</span> Бумажные стаканчики</div>
            <br />
            <div><span class="forColor">•</span> Баллончики от аэрозолей</div> 
            <br />
        </Text>
        


    </Div>
    )
    }
export default Other;