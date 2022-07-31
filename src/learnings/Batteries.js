import React from 'react';


import '../css/LearnPages.css';
import { Panel, Div, PanelHeader, Spacing, Button, Text, PanelHeaderBack, Title, TabsItem, Tabs, HorizontalCell, HorizontalScroll, PanelHeaderButton  } from '@vkontakte/vkui';


import { Icon28LocationMapOutline } from '@vkontakte/icons';



const Batteries = ({setOpenPoint, goTo, pointsFullArray, select}) => {


	return(
        <Div>
        <Title className='headerPage' level="1">Батарейки</Title>
        <Spacing size={16} />
        <Spacing size={16} />
        <Title  className='forColor' level="2" >Что можно сдать?</Title>
        <Spacing size={8} />
        <Text>«Пальчиковые» батарейки, батарейки-«таблетки»,
        аккумуляторы от телефонов, ноутбуков и т.п. (не везде)
        </Text>

        <Spacing size={16} />
        <Title  className='forColor' level="2" >Что делать с поврежденной батарейкой?</Title>
        <Spacing size={8} />
        <Text>Автомобильные аккумуляторы, аккумуляторы от UPS/
        ИБП (принимают отдельно в пунктах при автосервисах
        и магазинах ). НЕ выбрасывайте целую или
        поврежденную батарейку в общий контейнер. Если
        батарейка повреждена, поместите ее в отдельную
        герметичную тару.</Text>

        <Spacing size={16} />
        <Title  className='forColor' level="2" > Как подготовить к переработке?</Title>
        <Spacing size={8} />
        <Text>

            <div><span className="forColor">•</span>Проверьте, не повреждена ли батарейка.</div>
            <br />
            <div><span className="forColor">•</span>Поместите батарейки в отдельную тару, а затем в контейнер для приема.</div>
            <br />  
        </Text>


            <div className='button-div-s'>

			<Div>
				<Button
				onClick={(e)=>{
					async function toMap(){
                        var itCategory =[]
                        await pointsFullArray.map((mainItem)=>{
                            if(mainItem.Category === 'Батарейки'){ 
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
export default Batteries;