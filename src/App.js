import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Statistics from './panels/Statistics';
import Preview from './panels/Preview';
import Guides from './panels/Guides'
import Learning from './panels/Learning';
import Pages from './learnings/Pages';



const App = (first) => {
	const [scheme, setScheme] = useState('bright_light')
	const [activePanel, setActivePanel] = useState('');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [tabState, setTabState] = useState("points");
	const [platform, setPlatform] = useState(null);
	const [pageId, setPageId] = useState(null);
	const [learn, setLearn] = useState([]);
	const [firstStart, setFirstStart] = useState(true);
	
	
	

	useEffect(() => {

		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				setScheme(data.scheme)
			}
		});

 
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			const platformInfo = await bridge.send('VKWebAppGetClientVersion');
			console.log('sdfsasd' + platformInfo.platform)
			setPlatform(platformInfo.platform)
			setUser(user);


			const first = await (await bridge.send('VKWebAppStorageGet', {keys: ['onBoard']})).keys[0].value

			if(first === "false"){

				await setActivePanel('home')



			}else {
				await setActivePanel('statistics')
			}
			
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


			
			 

			 await setPopout(null);
			


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
								<Statistics id='statistics' go={go} restateFirst={restateFirst} />
								<Preview id='preview' go={go} />
								<Persik id='persik' go={go} />
								<Home id='home' fetchedUser={fetchedUser} go={go} restateTabState={restateTabState} getTabState={tabState} learn={learn} />
								
								<Guides id='guides' fetchedUser={fetchedUser} go={go} restateTabState={restateTabState} getTabState={tabState} restatePageId={restatePageId} learn={learn}/>
								<Learning id='learning' go={go} />
								<Pages id='pages' go={go} platform={platform} pageId={pageId} restatePageId={restatePageId} />
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
