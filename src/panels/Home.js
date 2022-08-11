import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';
import axios from 'axios';

import { Panel, HorizontalCell, HorizontalScroll, Button, Group, Title, CardGrid, Card, Text, CardScroll  } from '@vkontakte/vkui';

import '../css/Home.css';  

import CountDistance from '../tools/CountDistance'; //расчет дистанции
import UnitsDefine from '../tools/UnitsDefine'; //определение ед. измерения

import iconsList from '../lists/Icons'; //иконки и текст к ним 
import { Icon28LocationOutline, Icon28ChevronDownOutline, Icon28ChevronUpOutline, Icon28LocationMapOutline, Icon28ThumbsUpOutline} from '@vkontakte/icons'; 




import NotShareBanner from '../Home/NotShareBanner/NotShareBanner';

import NotLocationBanner from '../Home/NotLocationBanner/NotLocationBanner';


const Home = ({ id, setUserLoc,setUserLocationforHead, userLocationforHead, setActiveModal, go, points, setPopout, setOpenPoint, restatePageId, userLoc, setPoints, locationComplete, setLocationComplete, setFirstStartPages, setSelect }) => {
	
	
 

	
	var bannerList = [<NotShareBanner go={go}/>]

	 
	locationComplete === true? {}:bannerList.unshift(<NotLocationBanner setActiveModal ={setActiveModal} setUserLoc={setUserLoc} setLocationComplete={setLocationComplete} setPopout={setPopout} go={go} setUserLocationforHead={setUserLocationforHead}/>)


	useEffect(() => {

		 
		setSelect(0)
		setFirstStartPages(true)
		

		const sortPoints = () =>{
			points.map((item, index)=>{
				points[index].open = false;  
			})
		}
	  
		sortPoints()

 
		async function fetchData() {

			 


			

			 

			
			 
			  if(points){ 
				 setPopout(null);
				 
			  }

			 
			


		} 
		fetchData();
		
	}, []);

	let userLocation = [userLoc.lat, userLoc.long]
 
	



	const openCard = (item)=>{
		return(<div>
			<Title className='openHeadTitle' level="1" weight="2"> {item.Category} </Title>
			
			<Icon28ChevronUpOutline className='chevronUpIcon' />

			<div>
				<div className='openAddressHeadDiv'> <Icon28LocationOutline fill='#62A1E8' width={20} height={20} className='adressIcon'/> <Title className='openAddressHead' level="2" weight="2">По адресу:</Title></div>
				<div className='adressDiv'> <Text className='openAddress' weight="2">{item.address}</Text></div>
			</div> 
			<div>
				<div className='openTakeHeadDiv'> <Icon28ThumbsUpOutline fill='#62A1E8' width={20} height={20} className='adressIcon'/><Title className='openTakeHead' level="2" weight="2">Можно сдать:</Title></div>
				<div className='openTakeDiv' >
				{item.contentText.split(',').map((items, index)=>{
					return(
						<Button key={index.toString()}className='openTakeText' hasActive={false} hasHover={false} appearance='neutral' mode="primary" size="s" ><span className="forColor">{items}</span></Button>
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
				<Title className={userLoc.access? 'closeHeadTitle':'closeHeadTitleNotLoc'} level="1" weight="2"> {item.Category} </Title> 
				<Icon28ChevronDownOutline className='chevronDownIcon' width={28} height={28} />
				{userLocationforHead.access  && <Title className='distanceToPointClose' level="2" weight="2"> {UnitsDefine(CountDistance(userLocationforHead.lat, userLocationforHead.long,  item.lat, item.log ))} </Title>}
			</div>
		) }


 


		 
		var y = 0; //тест пулл
	  


	return(
		<Panel id={id}> 


				<div>
					<Group className='bannersGroup' header={ <Title style={{ padding: 20 }} level="1" >Подсказки</Title>}>

						<CardScroll   
						showArrows='always'
						className='cardScroll'>
								{bannerList && bannerList.length > 0 && bannerList.map((item, index)=>{
									return(
										<div key={index}>
											{item}
										</div>
									)
								})}
					
							 				
						</CardScroll >
            		</Group>
				</div>

		

				<div> 
					<Group className='takeGroup' header={ <Title style={{ padding: 20 }} level="1" onClick={()=>{
						y+=1;
						if(y===5){

							 axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client`).then(res => {
								const geo= res.data 
								 })
							alert('dev');
							bridge.send("VKWebAppStorageSet", {
								key: "onBoard",
								value: "true"
								
							});

							bridge.send("VKWebAppStorageSet", {
								key: "geoAccess",
								value: "false"
							});
						}

					}}>Узнайте как сдать </Title>} > 
						<HorizontalScroll 
						getScrollToLeft={(i) => i - 120}
            			getScrollToRight={(i) => i + 120}>

							<div style={{ display: "flex" }}>


								<React.Fragment>
								{iconsList(0).map((item, index)=>{
									return(
										<HorizontalCell key={index.toString()}className='itemCell' onClick={(event)=>{
											go(event);
											restatePageId(index);
										}} data-to={"pages"}>
											<Card mode="shadow" className='cardScroll-h' style={{  width:90 }}>
												<div className='scrollDiv-h'>
													<div> 
														{item[0]}
													</div>
													<div> 
														<Title className={item.text.length>11?'titleCell':'titleCellOneLine'} style={{color:'#99A2AD'}} level="3"> {item.text}</Title>
													</div>
												</div>
											</Card>
										</HorizontalCell>
									)
								})}
								</React.Fragment>
					
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
 

			{points&& points.slice(0, 15).map((item, index) =>{   
			

				return(


					

					
					 
					<Card key={index.toString()} className="card-h" onClick={()=>{ 

						 

						setPoints([
							...points.map((inf)=>
							inf.id === item.id ? {...inf, open: !inf.open} : {...inf})
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
