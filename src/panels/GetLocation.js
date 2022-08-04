import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, Title, Div, Button} from '@vkontakte/vkui';
import { ReactComponent as Statistic } from '../img/statistics.svg';
 
import axios from 'axios';
import '../css/GetLocation.css';


import { Icon28LocationMapOutline } from '@vkontakte/icons'; 


const GetLocation = ({ id, go, goTo, setUserLoc, userLoc, setPopout, setLocationComplete, setUserLocationforHead}) => {

	useEffect(() => { 
		async function fetchData() {

			await setPopout(null);
			 
			


		} 
		fetchData();
		
	}, []);


	


	

	async function getUserLocation(e){

		
		
		const userLocation = await bridge.send("VKWebAppGetGeodata");
		 
		if(userLocation.available){ 
			await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client`).then(async function (response) {
				const geo= response.data 
				 
				 const newItem = await {'access': true,
				'lat': geo.latitude,
				'long': geo.longitude}  
				await setUserLocationforHead(newItem);
				await setLocationComplete(true)
				await bridge.send("VKWebAppStorageSet", {
					key: "geoAccess",
					value: "true"
				});
				await setUserLoc(newItem);
				 
		})
			
			
		}else{
			alert('Произошла ошибка') 
		}
	 

		await bridge.send("VKWebAppStorageSet", {
			key: "onBoard",
			value: "false"
		});

		 
		

		
		 
	}

	
	
	
	
	
	
	
	return(
	

	<Panel id={id}>
			
            <Div  style={{ paddingTop: 60, paddingLeft: 50 }}>
				 <Icon28LocationMapOutline className="mainIcon-get" width={64} height={64}/>
			</Div>
			<div><Title level="1"  className='title-get'>Используйте все функции! </Title></div>
			<div> <Title level="3" weight="3" className="discription-get">Предоставьте доступ к местоположению для сортировки пунктов по дальности</Title></div>
			
			
			
			
			
			
			

			
			<div className='button-div-s'>

			<Div>
				<Button
				onClick={(e)=>{
					async function goPage(e){
						await getUserLocation(e);
						await goTo('home');
						
					}
					goPage(e)
					
				}} 
				data-to="home"
				className='mainButton-get'
				appearance='accent'
				size='l'
				>Предоставить</Button> 
			</Div>

            <Div>
                <Button size="l" appearance="accent" mode="tertiary" className='notNowButton' onClick={(e)=>{
					bridge.send("VKWebAppStorageSet", {
						key: "onBoard",
						value: "false-notLoc"
					});
					bridge.send("VKWebAppStorageSet", {
						key: "geoAccess",
						value: "false"
					});
					setLocationComplete(false)
					 
					go(e);
					
				}} data-to='home'>
                    Не сейчас
                </Button>
            </Div>
            
            

			</div>
		
        
          
	</Panel>
);}

GetLocation.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default GetLocation;