import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';


import { Panel, PanelHeader, Link, Header, Button, Group, Gradient, PanelHeaderBack, Title, TabsItem, Tabs, HorizontalCell, HorizontalScroll, PanelHeaderButton  } from '@vkontakte/vkui';


import '../css/Pages.css';
import iconsList from '../lists/Icons';


import Paper from './Paper';
import Plastic from './Plastic';
import Clothing from './Clothing';
import FoodWaste from './FoodWaste';
import Glass from './Glass';
import Bulb from './Bulb';
import Packaging from './Packaging';
import Metal from './Metal';
import Domestic from './Domestic';
import Hazardous from './Hazardous';
import TetraPak from './TetraPak';
import Batteries from './Batteries';
import Other from './Other'; 


import { 
	Icon24Cards2Outline,
	Icon28TshirtOutline,
	Icon28AppleOutline,
	Icon28GridLayoutOutline,
	Icon28LightbulbOutline,
	Icon28CubeBoxOutline,
	Icon28MotorcycleOutline,
	Icon28WasherOutline,
	Icon28WarningTriangleOutline } from '@vkontakte/icons';


const Pages = ({ id, go, platform, pageId, restatePageId, learn}) => {

    var availablePages = [<Paper />, <Plastic />, <Clothing/> , <FoodWaste/>, <Glass/>, <Bulb/>, <Packaging/>, <Metal/>, <Domestic/>, <Hazardous/>, <TetraPak/>, <Batteries/>, <Other/>]


    const [select, setSelect] = useState(0)
    var [itFirstStart, setFirstStart] = useState(true)
    
    var f = true


    

    availablePages.unshift(...availablePages.splice(pageId,1));

    async function updatePage(to){
        await setFirstStart(false)
        f= false
        !f && setSelect(to)&&restatePageId(to)
        console.log(availablePages)
    }


	return(
		<Panel id={id}>

            



        <PanelHeader left={<PanelHeaderBack onClick={go} data-to='guides' />}className='ph-paper'> Гайды </PanelHeader>

                    <Gradient style={{height: 60}}>

                    <Tabs mode="buttons" className='tab-div-p'>
                    <HorizontalScroll getScrollToLeft= '1200'>

                    {iconsList(pageId).map((item, index)=>{

                            
                        
                        
                        console.log('sss' + index )
                        return(
                            <HorizontalCell>
                        <TabsItem 
                            onClick = {()=>{
                                updatePage(index)
                                
                                }}
                            selected={select ===index}>
                           {  item[1] } 
                        </TabsItem>
                        </HorizontalCell>
                        )
                    })}
                    
                    </HorizontalScroll>
                    </Tabs> 

                    


                <div>{availablePages.map((item, index)=>{
                    console.log('adadadadad' + index)

                    if(itFirstStart){
                        if(0 ===index){
                            return(
                            <div>
                                {item}
                            </div>
                        )}
                    }else{
                        if(select ===index){
                            return(
                            <div>
                                {item}
                            </div>
                        )}
                    } })}</div>

             


                </Gradient>
			
                
	
	
			
		</Panel>
	);
}

Pages.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	tabState: PropTypes.string.isRequired,
};

export default Pages;
