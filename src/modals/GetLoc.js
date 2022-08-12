import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import PropTypes from 'prop-types';

import { Panel, Alert, Title, Div, Button, ModalPage } from '@vkontakte/vkui';
 
 
import axios from 'axios';
import '../css/GetLocation.css'


import { Icon28LocationMapOutline } from '@vkontakte/icons'; 


const GetLoc = ({ id,setPopout, go, goTo, setUserLoc, userLoc, setLocationComplete, setUserLocationforHead, setActiveModal}) => {
	async function ifClick(){
		async function notGetLoc(){
			await setPopout(null)
			await setActiveModal(false)
		}
		notGetLoc()
	}

	async function viewAlert(){
		await setPopout(<Alert 
			actions={[
			{
			title: "ок",
			mode: "cancel",
			autoclose: true, 
			},]}
			actionsLayout="vertical" 
			header="Не удалось определить локацию"
			text="Попробуйте включить доступ к геоданным на устройстве"
			onClose={()=>{
				ifClick()
			}}/>) 
	}

	


	useEffect(() => { 
		async function fetchData() {

			 
		 
		} 
		fetchData();
		
	}, []);


	


	

	async function getUserLocation(e){


		try{
					
		
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
				await setActiveModal(false)
				 
		})
			
			
		}else{
			
			viewAlert()
		}
	 

		await bridge.send("VKWebAppStorageSet", {
			key: "onBoard",
			value: "false"
		});
		}catch(e){
			viewAlert()
		}

		 
		

		
		 
	}

	
	
	
	
	
	
	
	return(
	

	<ModalPage id={id} 
    settlingHeight={100}>
			
            <div className='parenForGetLoc'>
            <Div  style={{ paddingTop: 60, paddingLeft: 50 }}>
				 <Icon28LocationMapOutline className="mainIcon-get" width={64} height={64}/>
			</Div>
			<div><Title level="1"  className='title-get'>Используйте все функции! </Title></div>
			<div> <Title level="3" weight="3" className="discription-get">Предоставьте доступ к местоположению для сортировки пунктов по дальности</Title></div>
			
			
			
			
			
			
			

			
			 

			<Div>
				<Button
				data-to="home"
				className='mainButton-get'
				appearance='accent'
				size='l'
				onClick={(e)=>{
					async function goPage(e){
						await getUserLocation(e);
						
						
					}
					goPage(e)
					
				}} 
				
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
					 
					setActiveModal(false)
					
				}} >
                    Не сейчас
                </Button>
            </Div>
            
            
            </div>
 
		
        
          
	</ModalPage>
);}

GetLoc.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default GetLoc;