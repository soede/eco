import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge'; 
import { Panel, ScreenSpinner, PanelHeader, PanelHeaderBack, Header, Button, Group, Div, Title, TabsItem, Tabs, CardGrid, Card, Alert  } from '@vkontakte/vkui';


import { AppleMaps, Annotation } from '@zandor300/react-apple-mapkitjs';

import '../css/MapPanel.css'; 

import EmojiDefine from '../lists/EmojiDefine';
 



import { Icon28ChevronDownOutline, Icon28ChevronUpOutline, Icon28LocationMapOutline} from '@vkontakte/icons'; 


const MapPanel = ({ id, go, points, openPoint, goTo, toBack, fetchedUser, setPopout}) => { 
	
async function viewAlert(){
	await goTo('home')
	await setPopout(<Alert 
		actions={[
		{
		title: "ок",
		mode: "cancel",
		autoclose: true, 
		},]}
		actionsLayout="vertical" 
		header="Не удалось загрузить карту"
		text="Попробуйте обновить приложение до последней версии"
		onClose={()=>{
			setPopout(null)
		}}/>) 
	}
	 
	try{
		return(
			<Panel id={id} className='hideScroll'>
				<PanelHeader left={<PanelHeaderBack onClick={toBack}  />}className='ph-paper'> Пункты </PanelHeader>
	
	
	
				
				<AppleMaps
				token="eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkZRSzhEM0s4VjUifQ.eyJpc3MiOiJGOUMzNVo3TURWIiwiaWF0IjoxNjU0NzYwNTc3LCJleHAiOjE2ODYyNjg4MDB9.H_2lSyr73hPdfb30rKl6rEUtulLmDMrwTH1CoAfylmKE0cCWSk2MQO6lvwHp6_LtTKnmjOuFbMmOzG5Rczz4XA"
				longitude={openPoint[0].log}
				latitude={openPoint[0].lat}
				zoomLevel={5}
				height={window.innerHeight }
				width={window.innerWidth}
			>
	 
	
				{openPoint.map((item, index)=>{
						try{
							return(
								<Annotation 
								id={index.toString()}
								key={index.toString()}
								glyphText={EmojiDefine(item.Category)} 
								title={item.Category} 
								subtitle={item.address} 
								color="#fff" 
								longitude={item.log}
								latitude={item.lat}
								selected={true} />
							)
						}catch(e){
	
						}
							
						})}
				 
				 
		
				</AppleMaps>
				
					
	
			
	
					
	
				
							
		
		
		
				
			</Panel>
		);
	}catch(e){
		
		
		viewAlert()
	}


}



export default MapPanel;
