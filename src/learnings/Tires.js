import React from 'react';


import '../css/LearnPages.css';
import { Panel, Div, PanelHeader, Spacing, Button, Text, PanelHeaderBack, Title, TabsItem, Tabs, HorizontalCell, HorizontalScroll, PanelHeaderButton  } from '@vkontakte/vkui';



import { Icon28LocationMapOutline } from '@vkontakte/icons';


const Tires = ({setOpenPoint, goTo, pointsFullArray}) =>{


	return(
        <Div>

            <Title className='headerPage' level="1">Шины</Title>
            <Spacing size={16} />
            <Title  className='forColor' level="2" >Что можно сдать?</Title>
            <Spacing size={8} />
            <Text>

            Шины не превышающие размер R22,5, без дисков, допускаются проколы и порезы, но сами шины должны быть относительно целыми, куски шин не принимаются.
           
            </Text>

            <Spacing size={16} />
            <Title  className='forColor' level="2" >Как подготовить?</Title>
            <Spacing size={8} />
            <Text>

            Шины должны быть относительно чистыми и не содержать земли и мусора внутри
            Один человек может сдать в контейнер один комплект из четырех шин.

            </Text>

            <div className='button-div-s'>

			<Div>
				<Button
				onClick={(e)=>{
					async function toMap(){
                        var itCategory =[]
                        await pointsFullArray.map((mainItem)=>{
                            if(mainItem.Category === 'Шины'){ 
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
export default Tires;