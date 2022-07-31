import React from 'react';


import '../css/LearnPages.css';
import { Panel, Div, PanelHeader, Spacing, Button, Text, PanelHeaderBack, Title, TabsItem, Tabs, HorizontalCell, HorizontalScroll, PanelHeaderButton  } from '@vkontakte/vkui';


import { Icon28LocationMapOutline } from '@vkontakte/icons';


const Bulb = ({setOpenPoint, goTo, pointsFullArray}) => {


	return(
        <Div>

        <Title className='headerPage' level="1">Лампочки</Title>
        <Spacing size={16} />
        <Title  className='forColor' level="2" >Что можно сдать?</Title>
        <Spacing size={8} />
        <Text>Лампы накаливания, галогенные, светодиодные,
        ртутные (люминесцентные) - не везде.</Text>

        <Spacing size={16} />
        <Title  className='forColor' level="2" > Что делать с разбитой лампочкой?</Title>
        <Spacing size={8} />
        <Text>Если вы повредили ртутную лампочку, тщательно
        соберите крупные осколки, мелкие части при помощи
        скотча или салфеток, обработайте помещение хлорным
        раствором и проветрите. Утилизировать разбитую
        лампу можно так же, как и целую.</Text>

        <Spacing size={16} />
        <Title  className='forColor' level="2" >Как подготовить к переработке?</Title>
        <Spacing size={8} />
        <Text>
            <div><span className="forColor">•</span>Ртутные лампы (люминесцентные) упаковать в
            герметичный пластиковый пакет.</div>
            <br />
            <div><span className="forColor">•</span>Обычные лампочки обернуть ветошью или бумагой
            и поместить в коробку, чтобы не разбились.</div>
            <br /> 
        </Text>
        
        <div className='button-div-s'>

			<Div>
				<Button
				onClick={(e)=>{
					async function toMap(){
                        var itCategory =[]
                        await pointsFullArray.map((mainItem)=>{
                            if(mainItem.Category === 'Лампочки'){ 
                                mainItem.Objects.map((item)=>{
                                    const newItem = { 
                                        Category: mainItem.Category,
                                        log: item.geometry.coordinates[0],
                                        lat: item.geometry.coordinates[1],
                                        open: false,
                                        title: item.properties.title,
                                        address: item.properties.address,
                                        contentText: item.properties.content_text
            
                                    }
                                    itCategory.push(newItem) 
                                })
                            }
                        })
                        await setOpenPoint(itCategory);
                        await goTo('mapPanel');
                    }
                    toMap()
				}} 
				className='button-s'
				appearance='accent'
				size='l'
                before={<Icon28LocationMapOutline />}
				>Открыть пункты</Button>
			</Div>

			</div>

    </Div>

    
    )
    }
export default Bulb;