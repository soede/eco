import bridge from '@vkontakte/vk-bridge';


import './LocationBanner.css';
import { ScreenSpinner, Div, Card, Spacing, Button, Text, PanelHeaderBack, Title, TabsItem, Tabs, HorizontalCell, HorizontalScroll, PanelHeaderButton  } from '@vkontakte/vkui';

 

import { Icon28LocationMapOutline  } from '@vkontakte/icons'; 

const NotLocationBanner = ({setUserLoc, go, setUserLocationforHead, locationComplete, setLocationComplete, setPopout, setActiveModal}) =>{
    

	return(
         
            <Card onClick={()=>{
                setActiveModal('getLocation')
            } } data-to='getLoc' mode="shadow" className='cardScroll-active' style={{  width:337, height:122 }}>
                <div className='location-div'>
                <Icon28LocationMapOutline  className='Icon-banner-loc' fill='#2688EB' height={40} width={40}/>
                
                    
                      
                <Title className='title-banner-loc' level="3">Ваше местоположение не удалось определить, нажмите, чтобы попробовать снова </Title>
                </div>
                 
                
                
                
            </Card> 
    )
    }
export default NotLocationBanner;


