import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge'; 
import { Panel, ScreenSpinner, PanelHeader, PanelHeaderBack, Header, Button, Group, Div, Title, TabsItem, Tabs, CardGrid, Card, Text  } from '@vkontakte/vkui';


import { Map, Marker } from 'react-wrapper-mapkitjs';

import '../css/MapPanel.css'; 

import EmojiDefine from '../lists/EmojiDefine';




import { Icon28ChevronDownOutline, Icon28ChevronUpOutline, Icon28LocationMapOutline} from '@vkontakte/icons'; 


const MapPanel = ({ id, go, points, openPoint, goTo,  }) => {
	





	

	useEffect(() =>{
    
		const fetchData = async() =>{

			await console.log('xxxx' + openPoint)

			


			
			
			




		  
		}


		
	
		fetchData()
	
	  }, [])





	  
	  
			
	

	  


	return(
		<Panel id={id}>
              <PanelHeader left={<PanelHeaderBack onClick={go} data-to='guides' />}className='ph-paper'> Пункты </PanelHeader>



            <div style={{width: document.documentElement.scrollWidth, height: document.documentElement.scrollHeight}} className='MapContainer'>
                <Map 
				tokenOrCallback="eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkZRSzhEM0s4VjUifQ.eyJpc3MiOiJGOUMzNVo3TURWIiwiaWF0IjoxNjU0NzYwNTc3LCJleHAiOjE2ODYyNjg4MDB9.H_2lSyr73hPdfb30rKl6rEUtulLmDMrwTH1CoAfylmKE0cCWSk2MQO6lvwHp6_LtTKnmjOuFbMmOzG5Rczz4XA" 
				region={{latitude:59.840875230457, 
						longitude:30.321853154506794,
        				latitudeSpan: 0.50,
       					longitudeSpan: 0.50,  }}>
			        {openPoint.map((item)=>{
					var emoji = EmojiDefine
						return(
							<Marker glyphText={EmojiDefine(item.Category)} title={item.Category} subtitle={item.Objects[0].properties.content_text} onClick={()=>{
								goTo('home')
							}} color="#fff" longitude={item.Objects[0].geometry.coordinates[0]}
				        		latitude={item.Objects[0].geometry.coordinates[1]} />
						)
					})}
		        </Map>
            </div>
                

		

				

			
						
	
	
	
			
		</Panel>
	);
}



export default MapPanel;
