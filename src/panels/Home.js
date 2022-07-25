import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';
import axios from 'axios';

import { Panel, ScreenSpinner, ButtonGroup, HorizontalCell, HorizontalScroll, PanelHeader, Header, Button, Group, Div, Title, TabsItem, Tabs, CardGrid, Card, Text, Gradient  } from '@vkontakte/vkui';

import '../css/Home.css';  

import CountDistance from '../tools/CountDistance'; //расчет дистанции
import UnitsDefine from '../tools/UnitsDefine'; //определение ед. измерения

import iconsList from '../lists/Icons'; //иконки и текст к ним 
import { Icon28LocationOutline, Icon28ChevronDownOutline, Icon28ChevronUpOutline, Icon28LocationMapOutline, Icon28ThumbsUpOutline} from '@vkontakte/icons'; 

import PagesTab from '../learnings/Pages';


const Home = ({ id, go, fetchedUser, getTabState, points, setPopout, setOpenPoint, restatePageId, userLoc, setPoints, accessGeo }) => {
	
	
	const [cardInfo, setCardInfo] =useState();

	const [itemSort, setItemSort] = useState([]);

	const [select, setSelect] = useState(0) 

	 

 



	useEffect(() => {

		const sortPoints = () =>{
			points.map((item, index)=>{
				points[index].open = false;  
			})
		}
	  
		sortPoints()

 
		async function fetchData() {

			 



			

			await points.sort((a, b) => CountDistance(30.3172771559412, 59.936348451648286, a.Objects[0].geometry.coordinates[0], a.Objects[0].geometry.coordinates[1]) > CountDistance(30.3172771559412, 59.936348451648286, b.Objects[0].geometry.coordinates[0], b.Objects[0].geometry.coordinates[1]) ? 1 : -1);
			
			await points.map((item, index)=>{
				console.log('a')
				console.log(item)
			})

			
			 
			  if(points){
				setCardInfo(points)
				await setPopout(null);
				points.map((item, index)=>{
					console.log("item")
					console.log(item)
				})
			  }

			 
			


		} 
		fetchData();
		
	}, []);

	let userLocation = [30.3172771559412, 59.936348451648286]

	

	



	const openCard = (item)=>{
		return(<div>
			<Title className='openHeadTitle' level="1" weight="2"> {item.Category} </Title>
			{userLoc.access && accessGeo&& <Title className='distanceToPointOpen' level="2" weight="2"> {UnitsDefine(CountDistance(userLocation[0], userLocation[1], item.Objects[0].geometry.coordinates[0], item.Objects[0].geometry.coordinates[1]))} </Title>}
			<Icon28ChevronUpOutline className='chevronUpIcon' />

			<div>
				<div className='openAddressHeadDiv'> <Icon28LocationOutline fill='#62A1E8' width={20} height={20} className='adressIcon'/> <Title className='openAddressHead' level="2" weight="2">По адресу:</Title></div>
				<div className='adressDiv'> <Text className='openAddress' weight="2">{item.Objects[0].properties.address}</Text></div>
			</div> 
			<div>
				<div className='openTakeHeadDiv'> <Icon28ThumbsUpOutline fill='#62A1E8' width={20} height={20} className='adressIcon'/><Title className='openTakeHead' level="2" weight="2">Можно сдать:</Title></div>
				<div className='openTakeDiv' >
				{item.Objects[0].properties.content_text.split(',').map((items)=>{
					return(
						<Button className='openTakeText' hasActive={false} hasHover={false} appearance='neutral' mode="primary" size="s" ><span className="forColor">{items}</span></Button>
					)
				})}
				</div>
				
				
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
				{userLoc.access && accessGeo&& <Title className='distanceToPointClose' level="2" weight="2"> {UnitsDefine(CountDistance(userLocation[0], userLocation[1], item.Objects[0].geometry.coordinates[0], item.Objects[0].geometry.coordinates[1]))} </Title>}
			</div>
		) }


 


		 
	   

	  


	return(
		<Panel id={id}> 

		

				<div> 
					<Group className='takeGroup' header={ <Title style={{ padding: 20 }} level="1"> Узнайте как сдать</Title>} >

						<HorizontalScroll 
						getScrollToLeft={(i) => i - 120}
            			getScrollToRight={(i) => i + 120}>

							<div style={{ display: "flex" }}>


								{iconsList(0).map((item, index)=>{
									return(
										<HorizontalCell className='itemCell' onClick={(event)=>{
											go(event);
											restatePageId(index);
										}} data-to={"pages"}>
											<Card mode="shadow" className='cardScroll-h' style={{  width:90 }}>
												<div className='scrollDiv-h'>
													<div> 
														{item[0]}
													</div>
													<div> 
														<Title className='titleCell' style={{color:'#99A2AD'}} level="3"> {item.text}</Title>
													</div>
												</div>
											</Card>
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
 

			{points&& points.map((item, index) =>{   
			

				return(


					

					
					 
					<Card key={index} className="card-h" onClick={()=>{ 

						 

						setPoints([
							...points.map((inf)=>
							inf.Category === item.Category ? {...inf, open: !inf.open} : {...inf})
						]) 	

					}} mode="shadow">  <div className={item.open? 'openCardDiv':'closeCardDiv'}> {item.open === true && openCard(item)} {!item.open && closeCard(item)}  </div> </Card>



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
