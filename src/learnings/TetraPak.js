import React from 'react';


import '../css/LearnPages.css';
import { Panel, Div, PanelHeader, Spacing, Button, Text, PanelHeaderBack, Title, TabsItem, Tabs, HorizontalCell, HorizontalScroll, PanelHeaderButton  } from '@vkontakte/vkui';




import { Icon28LocationMapOutline } from '@vkontakte/icons';


const TetraPak = ({setOpenPoint, goTo, pointsFullArray}) =>{


	return(
        <Div>
        <Title className='headerPage' level="1">Тетра Пак</Title>
        <Spacing size={16} />
        <Title  className='forColor' level="2" >Что можно сдать?</Title>
        <Spacing size={8} />
        <Text>

        Tetre pac, Pure pac, Tralin pak, Комбиблок и др. —
        многокомпонентная упаковка, состоящая из картона,
        полиэтилена и фольги. Иногда на упаковках тетрапак
        или аналогичных стоит маркировка РАР 81, 82 или 84 —
        не путайте с картоном.
    

        </Text>

        <Spacing size={16} />
        <Title  className='forColor' level="2" >Что если не тетрапак?</Title>
        <Spacing size={8} />
        <Text>

        Такая упаковка почти не перерабатывается,
        так как это очень сложно технически. Упаковка состоит
        из полиэтилена, бумаги и алюминия. Лучше покупать
        продукты в стекле, металле или пластике.
    
        

        </Text>

        <Spacing size={16} />
        <Title  className='forColor' level="2" >Как подготовить к переработке?</Title>
        <Spacing size={8} />
        <Text>

            <div><span class="forColor">•</span>Можно сдавать с трубочками и крышками.</div>
            <br />
            <div><span class="forColor">•</span>Помыть, уменьшить в объеме, отогнув уголки и сплющив. Можно разрезать упаковку. </div>
            <br /> 
        </Text>


        <div className='button-div-s'>

			<Div>
				<Button
				onClick={(e)=>{
					async function toMap(){
                        var itCategory =[]
                        await pointsFullArray.map((mainItem)=>{
                            if(mainItem.Category === 'Тетра Пак'){ 
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
export default TetraPak;
