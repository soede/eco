import React from 'react';

import '../css/LearnPages.css';
import { Panel, Div, PanelHeader, Spacing, Button, Text, PanelHeaderBack, Title, TabsItem, Tabs, HorizontalCell, HorizontalScroll, PanelHeaderButton  } from '@vkontakte/vkui';

import CountDistance from '../tools/CountDistance'; //расчет дистанции




import { Icon28LocationMapOutline } from '@vkontakte/icons';


const Clothing = ({setOpenPoint, goTo, pointsFullArray, userLocationforHead }) => {


	return(
        <Div>

            <Title className='headerPage' level="1">Одежда</Title>
            <Spacing size={16} />
            <Title  className='forColor' level="2" >Что можно сдать?</Title>
            <Spacing size={8} />
            <Text>Текстиль из натуральных волокон в очень плохом
            состоянии, ветошь. Вещи, которые сохранили товарный вид, лучше отдать на благотворительность.</Text>

            <Spacing size={16} />
            <Title  className='forColor' level="2" >Как подготовить к переработке?</Title>
            <Spacing size={8} />
            <Text>

            <div><span className="forColor">•</span>В большинстве пунктов принимают только чистые
            вещи, так что даже рваную одежду придется
            постирать.</div>
            <Spacing size={8} />
            <div><span className="forColor">•</span>Для спецодежды существуют отдельные пункты
            приема. Стирать ее не надо, так как существуют
            специальные методы очистки.</div>

            </Text>


            <div className='button-div-s'>

			<Div>
				<Button
				onClick={(e)=>{
					async function toMap(){
                        var itCategory =[]
                        await pointsFullArray.map((mainItem)=>{
                            if(mainItem.Category === 'Одежда'){ 
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
                        async function checkObj (itCategoryz){
                            if(itCategoryz.length>100){
                                var sorArrayws = await itCategoryz.sort((a, b) =>CountDistance(userLocationforHead.lat,  userLocationforHead.long, a.lat, a.log) > CountDistance( userLocationforHead.lat,userLocationforHead.long, b.lat, b.log) ? 1 : -1)
                                
                                await console.log("твоя позиция")
                                await console.log(userLocationforHead.long)
                                await setOpenPoint(sorArrayws.slice(0, 48));
                            }else{
                                await setOpenPoint(itCategoryz);
                            }
                        }
                        await  checkObj(itCategory)
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
export default Clothing;