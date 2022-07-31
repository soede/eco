import React, { useState, useEffect, useCallback } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import axios from 'axios';

import CountDistance from './tools/CountDistance'; //расчет дистанции

import Home from './panels/Home'; 
import Statistics from './panels/Statistics';
import Preview from './panels/Preview';
import Pages from './learnings/Pages';
import MapPanel from './panels/MapPanel'
import GetLocation from './panels/GetLocation' 
 
import NotShareBanner from './Home/NotShareBanner/NotShareBanner';


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
	const [pointsFullArray, setPointsFullArray] = useState([])
 
	 


	//pages
	var [itFirstStartPages, setFirstStartPages] = useState(true)
    
    var firstStartPage = true
	
	const [select, setSelect] = useState(0)
	


	//banners
	var [locationComplete, setLocationComplete] = useState(true)

	useEffect(()=>{

		console.log('v 0.12')

	}, [])

	useEffect(() => {

		console.log('asg')
		console.log('v 0.13')
		async function checkFirst(){
			
			if(firstStart === true){
				const geoGet = await (await bridge.send('VKWebAppStorageGet', {keys: ['geoAccess']})).keys[0].value

				if(geoGet==='true'){
					const userLocation = await bridge.send("VKWebAppGetGeodata");

					if(userLocation){
						const newItem = {access: true, 
						lat: userLocation.lat, 
						long: userLocation.long, }
						await setUserLoc(newItem); 
					}

					console.log('ASDhsdih')
					
				}
				await setFirstStart(false)
				await setAccessFeo(true)
			}else{
				await setAccessFeo(false)
				
			}
		}

		

		async function fetchData() {
			await checkFirst()
			await console.log( userLoc)
			await axios.post(`https://showtime.app-dich.com/api/eco-hub/places${window.location.search}`, {
			x: userLoc.lat,
			y: userLoc.long
			})
			.then(async function (response) {

				var pointArrays = []
				var fullPointArray = []

				
				//console.warn(response.data.data); 

				const defLocation  = {access: 'default', 
					lat:  30.3172771559412, 
					long: 59.936348451648286, }


					async function accessSuccess(itis, iii){

						var forID = 0

						fullPointArray = itis

						
						
						await itis.map((mainItem, index)=>{

							for (var i = 0; i < 4; i++) {
								 
								const newItem = {
									id: forID,
									Category: mainItem.Category,
									log: mainItem.Objects[i].geometry.coordinates[0],
									lat: mainItem.Objects[i].geometry.coordinates[1],
									open: false,
									title: mainItem.Objects[i].properties.title,
									address: mainItem.Objects[i].properties.address,
									contentText: mainItem.Objects[i].properties.content_text
		
								}
								pointArrays.push(newItem) 
								
								forID++ ;
								// ещё какие-то выражения
							 }
		
						}) 
			

						var sorArrayws = await pointArrays.sort((a, b) => CountDistance(userLoc.lat, userLoc.long , a.log, a.lat) > CountDistance(userLoc.long, userLoc.lat, b.log, b.lat) ? 1 : -1);
						 
						console.log(userLoc)
						await setPoints(sorArrayws) 
						await setPointsFullArray(fullPointArray)

						async function gg(){
							var ddd = await pointArrays.sort((a, b) => CountDistance(userLoc.lat, userLoc.long , a.log, a.lat) > CountDistance( userLoc.lat,userLoc.long, b.log, b.lat) ? 1 : -1);
							await console.log(userLoc.lat)
							console.log(userLoc)
							await setPoints(ddd) 
						}

						if(iii){
							await gg()
						}
						
					}

					

					 
		
		
					
				

				await response.data.data.length? accessSuccess(response.data.data, false) : accessSuccess(response.data.data, true)
				
				await console.log(pointsFullArray)
				await setPopout(null)
				
				//await console.log(response.data.data)

				//console.log(userLoc)
				
				

				
			})
			.catch(function (error) {
				console.warn(error);
			});
		}
 
		fetchData();
		

		
	}, [userLoc]);

	
	
	useEffect(() => { 
		

		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				setScheme(data.scheme)
			}
		});//тема

		

 
		async function fetchData() {

			const thisWidth = await document.documentElement.clientWidth;

			const thisHeight = await document.documentElement.clientHeight;


			const getAppInfo = await bridge.send("VKWebAppGetClientVersion");

			if(getAppInfo.platform === "web"){
				await bridge.send("VKWebAppResizeWindow", {"width": 
				thisWidth, "height": 
				thisHeight});
			}//ширина длина для пк


			
			const user = await bridge.send('VKWebAppGetUserInfo'); 
			setUser(user);


			await axios.post(`https://showtime.app-dich.com/api/eco-hub/places${window.location.search}`, {
			x: userLoc.lat,
			y: userLoc.long
			})
			.then(async function (response) {

				
				//console.warn(response.data.data); 


				var pointArray = [] 

				var fullPointArray = []

					async function accessSuccess(itis){

						var forID = 0


						fullPointArray = itis; //Для map'a

						

						await setPointsFullArray(itis)
						await itis.map((mainItem, index)=>{

							for (var i = 0; i < 4; i++) {
								 
								const newItem = {
									id: forID,
									Category: mainItem.Category,
									log: mainItem.Objects[i].geometry.coordinates[0],
									lat: mainItem.Objects[i].geometry.coordinates[1],
									open: false,
									title: mainItem.Objects[i].properties.title,
									address: mainItem.Objects[i].properties.address,
									contentText: mainItem.Objects[i].properties.content_text
		
								}
								pointArray.push(newItem) 
								
								forID++ ;
								// ещё какие-то выражения
							 }
		
						}) 
			

						var sorArrayw = await pointArray.sort((a, b) => CountDistance(59.92698956006839, 30.370623688386186, a.lat, a.log) > CountDistance(59.92698956006839, 30.370623688386186, b.lat, b.log) ? 1 : -1);
						 
						await console.log(pointsFullArray)
						await setPoints(sorArrayw) 
						await setPointsFullArray(fullPointArray)

				
			}

			await accessSuccess(response.data.data)
		})
			.catch(function (error) {
				console.warn(error);
			});

			
  
			try{ 
				const firstS =  await(await bridge.send('VKWebAppStorageGet', {"keys": ['onBoard']}))

				console.log(firstS.keys[0].value)

				const keysValue = firstS.keys[0].value
  
  
				if(keysValue === "false"){ 
					await setActivePanel('home')
					 


				}else if(keysValue === "false-notLoc"){
					
					setLocationComplete(false)
					await setActivePanel('home')
				}else{
					await setActivePanel('statistics')
				}
				 
			}catch(e){
				console.log(e)
				setActivePanel('statistics')
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



	function toBack (){
		if(openPoint.length === 1){
			setActivePanel('home');
			
		}else{
			setActivePanel('pages');
		}
		   	
	}



	useEffect(() => {
		const hash = [...new Set(window.location.hash.slice(1).split("/"))] .join("/");
		 window.location.assign( hash && !hash.includes(activePanel) ? `#${hash}/${activePanel}` : hash ? `#${hash}` : `#${activePanel}` );
		 }, [activePanel]); 
		 
		 const handleHashChange = useCallback(() => { 
			const hash = window.location.hash.slice(1);
			console.log('hoi' + hash)
			
			if (!hash) {
				 setActivePanel('home');
				 bridge.send("VKWebAppSetLocation", {"location": 'home'});
			} else {
				setActivePanel(hash.split("/")[hash.split("/").length - 1])
				bridge.send("VKWebAppSetLocation", {"location": `${hash.split("/")[hash.split("/").length - 1]}`});  } }, []);
	useEffect(() => { window.addEventListener("hashchange", handleHashChange); }, []);








	return (
		<ConfigProvider scheme={scheme}>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout popout={popout}>
						<SplitCol>
							<View activePanel={activePanel}>
								<Statistics id='statistics' go={go} restateFirst={restateFirst} setPopout={setPopout}/>
								<Preview id='preview' go={go} /> 
								<Home id='home' setUserLoc={setUserLoc} fetchedUser={fetchedUser} go={go} points={points} setPopout={setPopout} setOpenPoint={setOpenPoint} restatePageId={restatePageId} userLoc={userLoc} setPoints={setPoints} accessGeo={accessGeo}  locationComplete={locationComplete}/>
								<Pages id='pages' go={go} pageId={pageId} restatePageId={restatePageId} setOpenPoint={setOpenPoint} pointsFullArray={pointsFullArray} goTo={goTo} itFirstStartPages={itFirstStartPages} firstStartPage={firstStartPage} setFirstStartPages={setFirstStartPages} select={select} setSelect={setSelect}/>
								<MapPanel id='mapPanel'fetchedUser={fetchedUser} go={go} points={points} openPoint={openPoint} goTo={goTo} toBack={toBack}/>
								<GetLocation id='getLoc' go={go} setUserLoc={setUserLoc} userLoc={userLoc} setPopout={setPopout} />
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
