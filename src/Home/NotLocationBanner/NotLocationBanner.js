import bridge from '@vkontakte/vk-bridge';


import './LocationBanner.css';
import { ScreenSpinner, Div, Card, Spacing, Button, Text, PanelHeaderBack, Title, TabsItem, Tabs, HorizontalCell, HorizontalScroll, PanelHeaderButton  } from '@vkontakte/vkui';

 

import { Icon28LocationMapOutline  } from '@vkontakte/icons'; 

const NotLocationBanner = ({setUserLoc, setPopout}) =>{
    async function getLocation(){ 

        
        try{
            
            const userLocation = await bridge.send("VKWebAppGetGeodata");
            if(userLocation.available === 1){
                await console.log('ashad ' + userLocation.lat)
                await console.log('ashad ' + userLocation.long)
                await console.log(userLocation) 
                const newItem = await {access: true, 
                lat: userLocation.lat, 
                long: userLocation.long, }
                await setUserLoc(newItem);
                await bridge.send("VKWebAppStorageSet", {
                    key: "geoAccess",
                    value: "true"
                });
            }
        }catch(e){
             console.log(e)
        }
        
        
		 
		 
    }


	return(
         
            <Card onClick={()=>{
                getLocation()
            }} mode="shadow" className='cardScroll-active' style={{  width:337, height:122 }}>
                <div className='location-div'>
                <Icon28LocationMapOutline  className='Icon-banner-loc' fill='#2688EB' height={40} width={40}/>
                
                    
                      
                <Title className='title-banner-loc' level="3">Ваше местоположение не удалось определить, нажмите чтобы попробовать снова </Title>
                </div>
                 
                
                
                
            </Card> 
    )
    }
export default NotLocationBanner;


