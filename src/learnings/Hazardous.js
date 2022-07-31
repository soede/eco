import React from 'react';



import '../css/LearnPages.css';
import { Panel, Div, PanelHeader, Spacing, Button, Text, PanelHeaderBack, Title, TabsItem, Tabs, HorizontalCell, HorizontalScroll, PanelHeaderButton  } from '@vkontakte/vkui';




import { Icon28LocationMapOutline } from '@vkontakte/icons';

const Hazardous = ({setOpenPoint, goTo, pointsFullArray}) =>{


	return(
        <Div>
        <Title className='headerPage' level="1">Опасные отходы</Title>
        <Spacing size={16} />
        <Text>Эти отходы нельзя выбрасывать в общий контейнер, для
        их переработки и утилизации есть специальные пункты
        приема.
        </Text>
        <Spacing size={16} />
        <Title  className='forColor' level="2" >Что нужно сдать?</Title>
 


        <Text>
            <div><span className="forColor">•</span>Лекарства</div>
            <br />
            <div><span className="forColor">•</span>Градусники</div>
            <br />
            <div><span className="forColor">•</span>Аккумуляторы </div>
            <br />
            <div><span className="forColor">•</span>Баллончики от аэрозолей</div>
            <br />
            <div><span className="forColor">•</span>Бытовая техника</div>
            <br />
            <div><span className="forColor">•</span>Картриджи</div>
            <br />
            <div><span className="forColor">•</span>Шины</div>
            <br />
        </Text>


        <div className='button-div-s'>

			<Div>
				<Button
				onClick={(e)=>{
					async function toMap(){
                        var itCategory =[]
                        await pointsFullArray.map((mainItem)=>{
                            if(mainItem.Category === 'Опасные отходы'){ 
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
export default Hazardous;