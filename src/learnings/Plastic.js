import React, { useEffect, useState } from 'react';

import '../css/LearnPages.css';
import { Panel, Div, PanelHeader, Spacing, Button, Text, PanelHeaderBack, Title, TabsItem, Tabs, HorizontalCell, HorizontalScroll, PanelHeaderButton  } from '@vkontakte/vkui';

import CountDistance from '../tools/CountDistance'; //расчет дистанции



import { Icon28LocationMapOutline } from '@vkontakte/icons';


const Plastic = ({setOpenPoint, goTo, pointsFullArray, userLocationforHead}) =>{


	return(
        <Div>
            <Title className='headerPage' level="1">Пластик</Title>
            <Spacing size={16} />
            <Title  className='forColor' level="2" >Маркировка</Title>
            <Spacing size={8} />
            <Text>
                <div><span className="forColor">•</span>Полиэтилентерефталат — РЕТЕ (1).</div>
                <br />
                <div><span className="forColor">•</span>Высокоплотный полиэтилен — РЕНВ или НОРЕ (2). </div>
                <br />
                <div><span className="forColor">•</span>Высокоплотный полиэтилен — РЕНВ или НОРЕ (2). </div>
                <br />
                <div><span className="forColor">•</span>Поливинилхлорид — РVС (3)*. </div>
                <br />
                <div><span className="forColor">•</span>Низкоплотный полиэтилен — LDPE или REBD (4). </div>
                <br />
                <div><span className="forColor">•</span>Полипропилен — РР (5). </div>
                <br />
                <div><span className="forColor">•</span>Полистирол — РS (6). </div>
                <br />
                <div><span className="forColor">•</span>Все другие виды пластика — OTHER-О (7)*. </div>
                <br />
            </Text>
            <Text className='warning'>(*) Пластик с маркировками «З» и «7» в нашей стране не перерабатывается. </Text>
            <Spacing size={16} />
            <Title className='forColor' level="2">Что можно сдать?</Title>
            <Spacing size={8} />
            <Text>
            Пластиковые бутылки, канистры, и иные предметы с маркировкой 01 ПЭТ/РЕТ, 02 ПНД/HDPE. 
            Пластик с маркировкой 4, 5 и б сложнее перерабатывается и принимается не везде. 
            Лучше уточнять возможность его приема на пунктах переработки. 
            </Text>
            <Spacing size={16} />
            <Title className='forColor' level="2">Что нельзя сдать?</Title>
            <Spacing size={8} />
            <Text>
            Пластик с маркировками 3 (ПВХ), 7 (О, Other), 8 и АВS, а
            также любой биоразлагаемый пластик,
            фольгированную упаковку, тюбики и мягкие упаковки от
            майонеза и других соусов.

            </Text>


            <div className='button-div-s'>

			<Div>
				<Button
				onClick={(e)=>{
					async function toMap(){
                        var itCategory =[]
                        await pointsFullArray.map((mainItem)=>{
                            if(mainItem.Category === 'Пластик'){ 
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
                        await checkObj(itCategory)
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
export default Plastic;
