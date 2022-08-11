import React from 'react';

import '../css/LearnPages.css';
import { Panel, Div, PanelHeader, Spacing, Button, Text, PanelHeaderBack, Title, TabsItem, Tabs, HorizontalCell, HorizontalScroll, PanelHeaderButton  } from '@vkontakte/vkui';


import { Icon28LocationMapOutline } from '@vkontakte/icons';

const Domestic = ({setOpenPoint, goTo, pointsFullArray }) =>{


	return(
        <Div>

        <Title className='headerPage' level="1">Бытовая техника</Title>
        <Spacing size={16} />
        <Title  className='forColor' level="2" >Что можно сдать?</Title>
        <Spacing size={8} />
        <Text>
            <div><span className="forColor">•</span>Компьютерная техника и электронное оборудование.</div>
            <br />
            <div><span className="forColor">•</span>Телефонные аппараты и мобильные телефоны.</div>
            <br />
            <div><span className="forColor">•</span>Кондиционеры, вентиляторы и обогреватели.</div>
            <br />
            <div><span className="forColor">•</span>Электронные расходные материалы (схемы, платы, картриджи с приставок).</div>
            <br />
            <div><span className="forColor">•</span>05 - РР - ПП - С/05 - С/РР.</div>
            <br />
            <div><span className="forColor">•</span>Фольгированный пластик. </div>
            <br />
        </Text>

        <Spacing size={16} />
        <Title  className='forColor' level="2" >Куда сдавать?</Title>
        <Spacing size={8} />
        <Text>
            <br />
            <div><span className="forColor">•</span>Пункты приема.</div>
            <br />
            <div><span className="forColor">•</span>Волонтерские организации. </div>
            <br />
            <div><span className="forColor">•</span>Магазины бытовой техники (акции).</div>
            <br />


        </Text>

        <div className='button-div-s'>

			<Div>
				<Button
				onClick={(e)=>{
					async function toMap(){
                        var itCategory =[]
                        await pointsFullArray.map((mainItem)=>{
                            if(mainItem.Category === 'Бытовая техника'){ 
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
export default Domestic;