import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';
import axios from 'axios';

import { Panel, ScreenSpinner, HorizontalCell, HorizontalScroll, PanelHeader, Header, Button, Group, Div, Title, TabsItem, Tabs, CardGrid, Card, Text  } from '@vkontakte/vkui';

import '../css/Home.css'; 
import Learning from './Learning';

import CountDistance from '../tools/CountDistance'; //расчет дистанции
import UnitsDefine from '../tools/UnitsDefine'; //определение ед. измерения

import iconsList from '../lists/Icons'; //иконки и текст к ним

import { Icon28ChevronDownOutline, Icon28ChevronUpOutline, Icon28LocationMapOutline} from '@vkontakte/icons'; 

import PagesTab from '../learnings/Pages';


const Home = ({ id, go, fetchedUser, restateTabState, getTabState, learn, points, setPopout, setOpenPoint, restatePageId }) => {
	
	
	const [cardInfo, setCardInfo] =useState();

	const [itemSort, setItemSort] = useState([]);

	const [select, setSelect] = useState(0) 



	useEffect(() => {

 
		async function fetchData() {

		

			

			await points.sort((a, b) => CountDistance(30.3172771559412, 59.936348451648286, a.Objects[0].geometry.coordinates[0], a.Objects[0].geometry.coordinates[1]) > CountDistance(30.3172771559412, 59.936348451648286, b.Objects[0].geometry.coordinates[0], b.Objects[0].geometry.coordinates[1]) ? 1 : -1);
			
			
			 

			 
			


		} 
		fetchData();
	}, []);

	let userLocation = [30.3172771559412, 59.936348451648286]

	

	const [cardState, setCardState] = useState([ //пример бллл
		{id: 0, height:64},
		{id: 1, height:64},
		{id: 2, height:64},
		{id: 3, height:64},
		{id: 4, height:64},
		{id: 5, height:64},
		{id: 6, height:64},
		{id: 7, height:64},
		{id: 8, height:64},
		{id: 9, height:64},
		{id: 10, height:64},
		{id: 11, height:64},
		{id: 12, height:64},
	])



	const openCard = (item)=>{
		return(<div>
			<Title className='openHeadTitle' level="1" weight="2"> {item.Category} </Title>
			{userLocation && <Title className='distanceToPointOpen' level="2" weight="2"> {UnitsDefine(CountDistance(userLocation[0], userLocation[1], item.Objects[0].geometry.coordinates[0], item.Objects[0].geometry.coordinates[1]))} </Title>}
			<Icon28ChevronUpOutline className='chevronUpIcon' />

			<div>
				<Title className='openAddressHead' level="2" weight="2">По адресу:</Title>
				<Text className='openAddress' weight="2">{item.Objects[0].properties.address}</Text>
			</div>
			<div>
				<Title className='openTakeHead' level="2" weight="2">Можно сдать:</Title>
				<Text className='openTake' weight="2">{item.Objects[0].properties.content_text}</Text>
			</div>

			<Button
				onClick={(e)=>{
					setOpenPoint([item])
					go(e);
				}} 
				className='buttonLocation-h'
				data-to="mapPanel"
				appearance='accent'
				size='l'
				before={<Icon28LocationMapOutline />}
				>Открыть на карте</Button>
			</div>)
	}
	const closeCard =(item) => {
		return(
			<div> 
				<Title className='closeHeadTitle' level="1" weight="2"> {item.Category} </Title> 
				<Icon28ChevronDownOutline className='chevronDownIcon' width={28} height={28} />
				{userLocation && <Title className='distanceToPointClose' level="2" weight="2"> {UnitsDefine(CountDistance(userLocation[0], userLocation[1], item.Objects[0].geometry.coordinates[0], item.Objects[0].geometry.coordinates[1]))} </Title>}
			</div>
		) }




	

	useEffect(() =>{
    
		const fetchData = async() =>{


				
			if(points){
				setCardInfo(points)
				await setPopout(null);
			  }
			
			




		  
		}


		
	
		fetchData()
	
	  }, [])




	  
	  
			
	

	  


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

		

				<div> 
					<Group  header={ <Title style={{ padding: 20 }} level="1"> Можно сдать:</Title>} >

						<HorizontalScroll className='forScroll'>

							<div style={{ display: "flex" }}>


								{iconsList(0).map((item, index)=>{
									return(
										<HorizontalCell size="l" className='itemCell' onClick={(event)=>{
											go(event);
											restatePageId(index);
										}} data-to={"pages"}>
											<div className='llll'>
												<div> 
													{item[0]}
												</div>
												<div>
													<Title className='titleCell' style={{color:'#99A2AD'}} level="3"> {item.text}</Title>
												</div>
											</div>
										</HorizontalCell>
									)
								})}
					
							</div>				
						</HorizontalScroll>
            		</Group>
				</div>


				

			
				
	
			<div style={{ padding: 20 }}>
				<Title level="1" style={{ marginBottom: 16 }}>
					Список пунктов рядом
				</Title>
			</div>

			
			<CardGrid size="l">


			{cardState && points.map((item, index) =>{ 

				return(
					
					<Card className="card-h" onClick={()=>{
						
						
						
	
						setCardState([
							...cardState.map((card) =>
							card.id === cardState[index].id ?cardState[index].height === 256?{ ...card, height: 64} : { ...card, height: 256}: {...card}
							)
						])
	
						
						
	
					}} mode="shadow">  <div style={{height: cardState[index].height }}> {cardState[index].height === 256 && openCard(item)} {cardState[index].height == 64 && closeCard(item)}  </div> </Card>



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
