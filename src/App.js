import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import axios from 'axios';


import Home from './panels/Home';
import Persik from './panels/Persik';
import Statistics from './panels/Statistics';
import Preview from './panels/Preview';
import Guides from './panels/Guides'
import Learning from './panels/Learning';
import Pages from './learnings/Pages';
import MapPanel from './panels/MapPanel'
import GetLocation from './panels/GetLocation'



const App = (first) => {
	const [scheme, setScheme] = useState('bright_light') //тема
	const [activePanel, setActivePanel] = useState(''); //панель
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [tabState, setTabState] = useState("points"); //состояние tab
	const [platform, setPlatform] = useState(null); //хз
	const [pageId, setPageId] = useState(null); 
	const [learn, setLearn] = useState([]); 
	const [firstStart, setFirstStart] = useState(true); //первый запуск
	const [points, setPoints] = useState([]) //пункты
	const [openPoint, setOpenPoint] = useState([]) //координаты на открываемый пункт
	const [userLoc, setUserLoc] = useState({'access': false, 'lat': 30.359034448668798, 'long': 59.9308983472909, })
	const [accessGeo, setAccessFeo] = useState(false)





	useEffect(() => {

		async function checkFirst(){
			
			if(firstStart === true){
				await setFirstStart(false)
				await setAccessFeo(true)
			}else{
				await setAccessFeo(false)
			}
		}

		checkFirst()

		async function fetchData() {
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
			const platformInfo = await bridge.send('VKWebAppGetClientVersion');
			setPlatform(platformInfo.platform)
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


			

			var lat = 30.3172771559412; //тест координаты
			var long = 59.936348451648286;


			
			
	
				

				  
			 



			const first = await (await bridge.send('VKWebAppStorageGet', {keys: ['onBoard']})).keys[0].value

			
			await setActivePanel('statistics')



			
			await bridge.send("VKWebAppStorageSet", {
				key: "learn1",
				value: "null"
			 });

			 await bridge.send("VKWebAppStorageSet", {
				key: "example1",
				value: "example_value2"
			 });

			await bridge.send("VKWebAppStorageSet", {
				key: "example2",
				value: "example_value3"
			 });
			


			

			
			const inf = await bridge.send("VKWebAppStorageGet", {"keys": ["example2", "example1"]});


			


			await setLearn(inf.keys)


			
			 

			 
			


		} 
		fetchData();
	}, []);

	const restateFirst = (to) => {
		setFirstStart(to)

	}





	

	const restateTabState= (to) => {
		setTabState(to)

	}

	const restatePageId= (to) => {
		setPageId(to)

	}

	const restateLern= (to, state) => {
		setLearn([
			...learn.map((i) =>
			i[0].key === to ? { ...i, value: state} : {...i}
			)
		  ])

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
								<Persik id='persik' go={go} />
								<Home id='home' fetchedUser={fetchedUser} go={go} restateTabState={restateTabState} getTabState={tabState} learn={learn} points={points} setPopout={setPopout} setOpenPoint={setOpenPoint} restatePageId={restatePageId} userLoc={userLoc} setPoints={setPoints} accessGeo={accessGeo}/>
								<Guides id='guides' fetchedUser={fetchedUser} go={go} restateTabState={restateTabState} getTabState={tabState} restatePageId={restatePageId} learn={learn}/>
								<Learning id='learning' go={go} />
								<Pages id='pages' go={go} platform={platform} pageId={pageId} restatePageId={restatePageId}/>
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
