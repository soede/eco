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


const App = (first) => {
	const [scheme, setScheme] = useState('bright_light') //тема
	const [activePanel, setActivePanel] = useState(''); //панель
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);  
	const [pageId, setPageId] = useState(null); //номер открываемой страницы  
	const [points, setPoints] = useState([]) //информация о пунктах
	const [openPoint, setOpenPoint] = useState([]) //координаты на открываемый пункт
	const [userLoc, setUserLoc] = useState({'access': false, 'lat': 30.14958381930907, 'long':59.81261334162472, }) //координаты для счетов
	const [accessGeo, setAccessFeo] = useState(false); 
	const [pointsFullArray, setPointsFullArray] = useState([])

	const [userLocationforHead, setUserLocationforHead] = useState({'access': false, 'lat': 30.14958381930907, 'long':59.81261334162472, })
 

	//pages
	var [itFirstStartPages, setFirstStartPages] = useState(true)
    
    var firstStartPage = true
	
	const [select, setSelect] = useState(0)
	


	//banners
	var [locationComplete, setLocationComplete] = useState(false)



	useEffect(() => {
		async function checkFirst(){
			
			try{
				if(firstStart === true){
					const geoGet = await (await bridge.send('VKWebAppStorageGet', {keys: ['geoAccess']})).keys[0].value
	
					if(geoGet==='true'){
						 
						const permissionsForLocation = await bridge.send("VKWebAppGetGrantedPermissions")


						if(permissionsForLocation.permissions.includes("location")){
							await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client`).then(async function (response) {
							const geo= response.data 
							const newItem = await {'access': true,
							'lat': geo.latitude,
							'long': geo.longitude}
							await setUserLoc(newItem);
							await setUserLocationforHead(newItem);
							setLocationComplete(true)
							await bridge.send("VKWebAppStorageSet", {
								key: "geoAccess",
								value: "true"
							});
					})
							
						}else{
						}
	
						
						
					}
					await setFirstStart(false)
					await setAccessFeo(true)
				}else{
					await setAccessFeo(false)
					
				}
			}catch(e){ 
			}
			
			
		}

		async function ifUserLocUpdate() {
			checkFirst()
			
			await axios.post(`https://showtime.app-dich.com/api/eco-hub/places${window.location.search}`, {
				x: userLoc.lat,
				y: userLoc.long,
				})
				.then(async function (response) { 
	
	
	
					var pointArray = [] 
	
					var fullPointArray = []
	
						async function accessSuccess(itis){
	
							var forID = 0
	
	
							fullPointArray = itis; //Для map'a
	
							
	
							await setPointsFullArray(itis)
							await itis.map((mainItem)=>{
	
								for (var i = 0; i < 500; i++) {
	
									try{
										
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
									}catch(e){ 
									}
								 }
			
							}) 
				
	
							var sorArrayws = await pointArray.sort((a, b) => CountDistance(userLocationforHead.lat,  userLocationforHead.long, a.lat, a.log) > CountDistance( userLocationforHead.lat,userLocationforHead.long, b.lat, b.log) ? 1 : -1);
							 
	
							await setPoints(sorArrayws)  //открой похзже
							await setPointsFullArray(fullPointArray)
	
	
							 
	
					
				}
				 
	
	
				await response.data.data.length?accessSuccess(response.data.data.slice(0, 13)) :{}//
			})
				.catch(function (error) {
					console.warn(error);
				});
		}
 
		ifUserLocUpdate();
		

		
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
			y: userLoc.long,
			})
			.then(async function (response) {

			 
				 



				var pointArray = [] 

				var fullPointArray = []

					async function accessSuccess(itis){

						var forID = 0


						fullPointArray = itis; //Для map'a

						

						await setPointsFullArray(itis)
						await itis.map((mainItem, index)=>{

							for (var i = 0; i < 500; i++) {

								try{ 
									
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
								}catch(e){
									 
								}
							 }
		
						}) 
			

						var sorArrayw = await pointArray.sort((a, b) => CountDistance(userLoc.long,  userLoc.lat, a.lat, a.log) > CountDistance( userLoc.long,userLoc.lat, b.lat, b.log) ? 1 : -1);
						 
	 
						await setPoints(sorArrayw)  //открой похзже
						await setPointsFullArray(fullPointArray)


						 

				
			}
			 


			await response.data.data.length?accessSuccess(response.data.data.slice(0, 13)) :{}
		})
			.catch(function (error) {
				console.warn(error);
			});

			
  
			try{ 
				const firstS =  await(await bridge.send('VKWebAppStorageGet', {"keys": ['onBoard']}))
 

				const keysValue = firstS.keys[0].value
  
  
				if(keysValue === "false"){ 
					await setActivePanel('home') 


				}else if(keysValue === "false-notLoc"){
					
					
					await setActivePanel('home')
				}else{
					await setActivePanel('statistics')
				}
				 
			}catch(e){ 
				setActivePanel('statistics')
			}
 
			
			

			
			const inf = await bridge.send("VKWebAppStorageGet", {"keys": ["example2", "example1"]});




		} 
		fetchData();
	}, []);

	 

 


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
			
			if (!hash) {
				 setActivePanel('home');
				 bridge.send("VKWebAppSetLocation", {"location": 'home'});
			} else {
				setActivePanel(hash.split("/")[hash.split("/").length - 1])
				 } }, []);
	useEffect(() => { window.addEventListener("hashchange", handleHashChange); }, []);








	return (
		<ConfigProvider scheme={scheme}>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout popout={popout}>
						<SplitCol>
							<View activePanel={activePanel}>
								<Statistics id='statistics' go={go}  setPopout={setPopout}/>
								<Preview id='preview' go={go} /> 
								<Home id='home' setLocationComplete={setLocationComplete} setUserLocationforHead={setUserLocationforHead} userLocationforHead={userLocationforHead} setUserLoc={setUserLoc} fetchedUser={fetchedUser} go={go} points={points} setPopout={setPopout} setOpenPoint={setOpenPoint} restatePageId={restatePageId} userLoc={userLoc} setPoints={setPoints} accessGeo={accessGeo}  locationComplete={locationComplete}/>
								<Pages id='pages'  setPopout={setPopout} userLocationforHead={userLocationforHead} go={go} userLoc={userLoc} pageId={pageId} restatePageId={restatePageId} setOpenPoint={setOpenPoint} pointsFullArray={pointsFullArray} goTo={goTo} itFirstStartPages={itFirstStartPages} firstStartPage={firstStartPage} setFirstStartPages={setFirstStartPages} select={select} setSelect={setSelect}/>
								<MapPanel id='mapPanel'fetchedUser={fetchedUser} go={go} points={points} openPoint={openPoint} goTo={goTo} toBack={toBack}/>
								<GetLocation id='getLoc' goTo={goTo}  setUserLocationforHead={setUserLocationforHead} go={go} setLocationComplete={setLocationComplete} setUserLoc={setUserLoc} userLoc={userLoc} setPopout={setPopout} />
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
