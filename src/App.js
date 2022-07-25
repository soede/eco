import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import axios from 'axios';


import Home from './panels/Home'; 
import Statistics from './panels/Statistics';
import Preview from './panels/Preview';
import Pages from './learnings/Pages';
import MapPanel from './panels/MapPanel'
import GetLocation from './panels/GetLocation'



const App = (first) => {
	const [scheme, setScheme] = useState('bright_light') //тема
	const [activePanel, setActivePanel] = useState(''); //панель
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);  
	const [pageId, setPageId] = useState(null); //номер открываемой страницы 
	const [firstStart, setFirstStart] = useState(true); //первый запуск
	const [points, setPoints] = useState([]) //информация о пунктах
	const [openPoint, setOpenPoint] = useState([]) //координаты на открываемый пункт
	const [userLoc, setUserLoc] = useState({'access': false, 'lat': 30.359034448668798, 'long': 59.9308983472909, })
	const [accessGeo, setAccessFeo] = useState(false);



	useEffect(()=>{

	}, [])

	useEffect(() => {

		async function checkFirst(){
			
			if(firstStart === true){
				const geoGet = await (await bridge.send('VKWebAppStorageGet', {keys: ['geoAccess']})).keys[0].value

				if(geoGet==='true'){
					const userLocation = await bridge.send("VKWebAppGetGeodata");

					const newItem = {access: true, 
						lat: userLocation.lat, 
						long: userLocation.long, }
					await setUserLoc(newItem); 
					
				}
				await setFirstStart(false)
				await setAccessFeo(true)
			}else{
				await setAccessFeo(false)
				
			}
		}

		

		async function fetchData() {
			await checkFirst()
			await axios.post(`https://showtime.app-dich.com/api/eco-hub/places${window.location.search}`, {
			x: userLoc.lat,
			y: userLoc.long
			})
			.then(async function (response) {

				
				console.warn(response.data.data); 

				const defLocation  = {access: 'default', 
					lat:  30.3172771559412, 
					long: 59.936348451648286, }


					async function accessSuccess(){
						await setPoints(response.data.data) 
					}

					 
		
		
					
				

				await response.data.data.length?  accessSuccess() : console.log('lol')
				await console.log(response.data.data)

				console.log(userLoc)
				
				

				
			})
			.catch(function (error) {
				console.warn(error);
			});
		}
 
		fetchData();
		

		
	}, [userLoc]);

	
	
	useEffect(() => { 
		console.log(userLoc)

		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				setScheme(data.scheme)
			}
		});

		

 
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo'); 
			setUser(user);


			await axios.post(`https://showtime.app-dich.com/api/eco-hub/places${window.location.search}`, {
			x: userLoc.lat,
			y: userLoc.long
			})
			.then(async function (response) {

				
				console.warn(response.data.data); 
				await setPoints(response.data.data);
				
				

				
			})
			.catch(function (error) {
				console.warn(error);
			});
  

			const first = await (await bridge.send('VKWebAppStorageGet', {keys: ['onBoards11']})).keys[0].value
  
			if(first === "false"){

				await setActivePanel('home')



			}else {
				await setActivePanel('statistics')
			}
 
			

			
			const inf = await bridge.send("VKWebAppStorageGet", {"keys": ["example2", "example1"]});




		} 
		fetchData();
	}, []);

	const restateFirst = (to) => {
		setFirstStart(to)

	}


	const restatePageId= (to) => {
		setPageId(to)

	}


	const goTo = (to) => {
		setActivePanel(to);
	};

	

	const go = (e) => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<ConfigProvider scheme={scheme}>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout popout={popout}>
						<SplitCol>
							<View activePanel={activePanel}>
								<Statistics id='statistics' go={go} restateFirst={restateFirst} setPopout={setPopout}/>
								<Preview id='preview' go={go} /> 
								<Home id='home' fetchedUser={fetchedUser} go={go} points={points} setPopout={setPopout} setOpenPoint={setOpenPoint} restatePageId={restatePageId} userLoc={userLoc} setPoints={setPoints} accessGeo={accessGeo}/>
								<Pages id='pages' go={go} pageId={pageId} restatePageId={restatePageId}/>
								<MapPanel id='mapPanel' go={go} points={points} openPoint={openPoint} goTo={goTo}/>
								<GetLocation id='getLoc' go={go} setUserLoc={setUserLoc} userLoc={userLoc}/>
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
