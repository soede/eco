import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';
import axios from 'axios';

import { Panel, PanelHeader, Header, Button, Group, Div, Title, TabsItem, Tabs, CardGrid, Card  } from '@vkontakte/vkui';

import '../css/Home.css'; 
import Learning from './Learning';



const Home = ({ id, go, fetchedUser, restateTabState, getTabState, learn }) => {

	const [cardState, setCardState] = useState([ //пример бллл
		{id: 0, height:48},
		{id: 1, height:48},
		{id: 2, height:48},
		{id: 3, height:48},
		{id: 4, height:48},
		{id: 5, height:48},
		{id: 6, height:48},
		{id: 7, height:48},
		{id: 8, height:48},
		{id: 9, height:48},
		{id: 10, height:48},
		{id: 11, height:48},
		{id: 12, height:48},
	])

	const [points, setPoints] = useState([]) //пункты


	const openCard = <h1 className='tetless-h'> капец</h1>;
	const closeCard =(title) => {
		return(
			<div> <Title className='closeHeadTitle' level="1" weight="2"> {title} </Title></div>
		) }




	

	useEffect(() =>{
    
		const fetchData = async() =>{

			
			  


			const params = await bridge.send("VKWebAppGetLaunchParams");

			const userLocation = await bridge.send("VKWebAppGetGeodata");


			const url = `https://showtime.app-dich.com/api/eco-hub/places?vk_access_token_settings=${params.vk_access_token_settings}
			&vk_app_id=${params.vk_app_id}
			&vk_are_notifications_enabled=${params.vk_are_notifications_enabled}
			&vk_is_app_user=${params.vk_is_app_user}
			&vk_is_favorite=${params.vk_is_favorite}
			&vk_language=${params.vk_language}
			&vk_platform=${params.vk_platform}
			&vk_ref=${params.vk_ref}
			&vk_ts=${params.vk_ts}
			&vk_user_id=${params.vk_user_id}
			&sign=${params.sign}`

			var lat =30.3172771559412; //тест координаты
			var long =59.936348451648286;


			try {
			
				await axios.post(`https://showtime.app-dich.com/api/eco-hub/places?vk_access_token_settings=${params.vk_access_token_settings}
				&vk_app_id=${params.vk_app_id}
				&vk_are_notifications_enabled=${params.vk_are_notifications_enabled}
				&vk_is_app_user=${params.vk_is_app_user}
				&vk_is_favorite=${params.vk_is_favorite}
				&vk_language=${params.vk_language}
				&vk_platform=${params.vk_platform}
				&vk_ref=${params.vk_ref}
				&vk_ts=${params.vk_ts}
				&vk_user_id=${params.vk_user_id}
				&sign=${params.sign}`, {
					x: lat,
					y: long
				  })
				  .then(function (response) {
					console.log(response.data.data);
					setPoints(response.data.data)
				  })
				  .catch(function (error) {
					console.log(error);
				  });

				  
			 

				
			
			} catch (error) {
			console.error('Ошибка:', error);
			}





		  
		}
	
		fetchData()
	
	  }, [])

			
			const dist = getDistanceFromLatLonInKm(30.3172771559412, 59.936348451648286, 30.302902150122915, 59.95046278457837 ) //расстояние между точками


			function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
				var R = 6371; // Radius of the earth in km
				var dLat = deg2rad(lat2-lat1);  // deg2rad below
				var dLon = deg2rad(lon2-lon1); 
				var a = 
				  Math.sin(dLat/2) * Math.sin(dLat/2) +
				  Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
				  Math.sin(dLon/2) * Math.sin(dLon/2)
				  ; 
				var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
				var d = R * c; // Distance in km
				return d;
			  }
			  
			function deg2rad(deg) {
				return deg * (Math.PI/180)
			  }


	return(
		<Panel id={id}>

			  <PanelHeader className='panelHeader-h'>
				<Tabs className='tab-div-h'>
				<TabsItem
					selected={true}>
					Пункты
              	</TabsItem>
					<TabsItem
						onClick={go}
						data-to="guides">
						Обучение
              	</TabsItem>
				</Tabs>
        		</PanelHeader>

				

				{points.map(item =>{
					return(<h1>{item.Category} </h1>)
				})}
				
				
	
			<div style={{ padding: 20 }}>
				<Title level="1" style={{ marginBottom: 16 }}>
					Список пунктов рядомs
				</Title>
			</div>

			
			<CardGrid size="l">


			{points.map((item, index) =>{



				

				return(
					
					<Card className="card-h" onClick={()=>{
						
						cardState[index].height = 128;
						
	
						setCardState([
							...cardState.map((card) =>
							card.id === cardState[index].id ? { ...card, height: 128} : {...card}
							)
						])
	
						
						
	
					}} mode="shadow">  <div style={{height: cardState[index].height }}> {cardState[index].height == 48 && closeCard(item.Category)}  </div>{cardState[index].height == 128 && openCard} </Card>



				);

				

			})}

    	</CardGrid> 
	
	
	
			
		</Panel>
	);
}

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	tabState: PropTypes.string.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
