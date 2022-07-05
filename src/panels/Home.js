import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';
import axios from 'axios';

import { Panel, ScreenSpinner, PanelHeader, Header, Button, Group, Div, Title, TabsItem, Tabs, CardGrid, Card  } from '@vkontakte/vkui';

import '../css/Home.css'; 
import Learning from './Learning';

import CountDistance from '../tools/CountDistance';



const Home = ({ id, go, fetchedUser, restateTabState, getTabState, learn }) => {

	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

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

			var lat = 30.3172771559412; //тест координаты
			var long = 59.936348451648286;


			
			
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
					console.warn('ss' + response.data.data);
					setPoints(response.data.data);
				})
				.catch(function (error) {
					console.warn(error);
				});

				  
			 

				
			
			


			await setPopout(null);
			





		  
		}
	
		fetchData()
	
	  }, [])

			
	



	return(
		<Panel id={id} popout={popout}>

			  <PanelHeader className='panelHeader-h'>
				<Tabs className='tab-div-h'>
				<TabsItem
					selected={true}>
					Пунктыd
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
					Список пунктов рядом
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
