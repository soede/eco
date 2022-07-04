import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';


import { Panel, PanelHeader, Header, Button, Group, PanelHeaderBack, Title, TabsItem, Tabs, HorizontalCell, HorizontalScroll, PanelHeaderButton  } from '@vkontakte/vkui';


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


import '../css/Pages.css';
import { ReactComponent as BottleOn } from '../img/bottle-on.svg';
import { ReactComponent as BottleOff } from '../img/bottle-off.svg';

import { ReactComponent as TetraOn } from '../img/tetra-on.svg';
import { ReactComponent as TetraOff } from '../img/tetra-off.svg';

import { ReactComponent as EnergyOff } from '../img/energy-off.svg';
import { ReactComponent as EnergyOn } from '../img/energy-on.svg';

import { ReactComponent as OtherOff } from '../img/other-off.svg';
import { ReactComponent as OtherOn } from '../img/other-on.svg';


const Pages = ({ id, go, platform, pageId, restatePageId, learn}) => {




	return(
		<Panel id={id}>



        <PanelHeader left={<PanelHeaderBack onClick={go} data-to='guides' />}className='ph-paper'> Гайды </PanelHeader>
        

        
        





                <Tabs mode="buttons" className='tab-div-p'>
                    <HorizontalScroll getScrollToLeft= '1200'>
                    <HorizontalCell>
                    <TabsItem
                        onClick = {()=>{
                            restatePageId(1);
                            saveСhanges();}}
                        selected={pageId===1} >
                            <Icon24Cards2Outline fill={pageId===1?'#62A1E8':'#99A2AD'}/>
                    </TabsItem>
                    </HorizontalCell>
                    <HorizontalCell>
                    <TabsItem
                        onClick = {()=>{
                            restatePageId(2);}}
                        selected={pageId===2} >
                            {pageId===2?<BottleOn width={28} height={28} />:<BottleOff width={28} height={28} />}
                    </TabsItem>
                    </HorizontalCell>
                    <HorizontalCell>
                    <TabsItem
                        onClick = {()=>{
                            restatePageId(3);
                            }}
                        selected={pageId ===3}>
                        <Icon28TshirtOutline fill={pageId===3?'#62A1E8':'#99A2AD'} />
                    </TabsItem>
                    </HorizontalCell>
                    <HorizontalCell>
                    <TabsItem
                        onClick = {()=>{
                            restatePageId(4);
                            }}
                        selected={pageId ===4}> <Icon28AppleOutline fill={pageId===4?'#62A1E8':'#99A2AD'} /> </TabsItem>
                    </HorizontalCell>
                    <HorizontalCell>
                    <TabsItem
                        onClick = {()=>{
                            restatePageId(5);
                            }}
                        selected={pageId ===5}>
                        <Icon28GridLayoutOutline fill={pageId===5?'#62A1E8':'#99A2AD'} />
                    </TabsItem>
                    </HorizontalCell>
                    <HorizontalCell>
                    <TabsItem
                        onClick = {()=>{
                            restatePageId(6);
                            }}
                        selected={pageId ===6}>
                        <Icon28LightbulbOutline fill={pageId===6?'#62A1E8':'#99A2AD'}/>
                    </TabsItem>
                    </HorizontalCell>
                    <HorizontalCell>
                    <TabsItem
                        onClick = {()=>{
                            restatePageId(7);
                            }}
                        selected={pageId ===7}>
                        <Icon28CubeBoxOutline fill={pageId===7?'#62A1E8':'#99A2AD'}/>
                    </TabsItem>
                    </HorizontalCell>
                    <HorizontalCell>
                    <TabsItem
                        onClick = {()=>{
                            restatePageId(8);
                            }}
                        selected={pageId ===8}>
                        <Icon28MotorcycleOutline fill={pageId===8?'#62A1E8':'#99A2AD'} />
                    </TabsItem>
                    </HorizontalCell>
                    <HorizontalCell>
                    <TabsItem
                        onClick = {()=>{
                            restatePageId(9);
                            }}
                        selected={pageId ===9}>
                        <Icon28WasherOutline fill={pageId===9?'#62A1E8':'#99A2AD'}/>
                    </TabsItem>
                    </HorizontalCell>
                    <HorizontalCell>
                    <TabsItem
                        onClick = {()=>{
                            restatePageId(10);
                            }}
                        selected={pageId ===10}>
                        <Icon28WarningTriangleOutline fill={pageId===10?'#62A1E8':'#99A2AD'}/>
                    </TabsItem>
                    </HorizontalCell>
                    <HorizontalCell>
                    <TabsItem
                        onClick = {()=>{
                            restatePageId(11);
                            }}
                        selected={pageId ===11}>
                        {pageId===11?<TetraOn height={23} />:<TetraOff height={23} />}
                    </TabsItem>
                    </HorizontalCell>
                    <HorizontalCell>
                    <TabsItem
                        onClick = {()=>{
                            restatePageId(12);
                            }}
                        selected={pageId ===12}>
                        {pageId===12?<EnergyOn  width={23} height={23} />:<EnergyOff  width={23} height={23} />}
                    </TabsItem>
                    </HorizontalCell>
                    <HorizontalCell>
                    <TabsItem
                        onClick = {()=>{
                            restatePageId(13);
                            }}
                        selected={pageId ===13}>
                        {pageId===13?<OtherOn  width={24} height={24} />:<OtherOff  width={24} height={24} />}
                    </TabsItem>
                    </HorizontalCell>
                    </HorizontalScroll>
                    </Tabs> 

                    



                <div>{pageId===1&&<h1>123</h1>}</div>
                <div>{pageId===2&&<h1>321</h1>}</div>
                <div>{pageId===4&&<h1>edsd</h1>}</div> 
                <div>{pageId===3&&<h1>32sdgb1</h1>}</div> 
                <div>{pageId===5&&<h1>3asdf21</h1>}</div> 
                <div>{pageId===6&&<h1>32 dfdfg1</h1>}</div>
                <div>{pageId===7&&<h1>3xcxcf21</h1>}</div>
                <div>{pageId===8&&<h1>321fdghdfg</h1>}</div>
                <div>{pageId===9&&<h1>32 ghdf df1</h1>}</div> 
                <div>{pageId===10&&<h1>sdfgsdg</h1>}</div> 
                <div>{pageId===11&&<h1>sdfgsdg</h1>}</div>


			
	
	
	
			
		</Panel>
	);
}

Pages.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	tabState: PropTypes.string.isRequired,
};

export default Pages;
