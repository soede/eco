import bridge from '@vkontakte/vk-bridge';


import './ShareBanner.css';
import { Panel, Div, Card, Spacing, Button, Text, PanelHeaderBack, Title, TabsItem, Tabs, HorizontalCell, HorizontalScroll, PanelHeaderButton  } from '@vkontakte/vkui';

 

import { Icon28MagicWandOutline, Icon28StoryOutline  } from '@vkontakte/icons'; 

const NotShareBanner = () =>{


	return(
         
            <Card mode="shadow" className='cardScroll-def' style={{ margin:10,  width:300, height:122 }}>
                <div className='iconDiv-banner'>
                    <div> 
                        <Icon28MagicWandOutline fill='#2688EB' height={34} width={34}/>
                    </div>
                    <div> 
                        <Title className='title-banner' level="2">Расскажите друзьям о том, как спасти город </Title>
                    </div>
                    <div> 
                        <Button className='button-banner' before={<Icon28StoryOutline height={22} width={22}/>} onClick={()=>{
                           bridge.send("VKWebAppShowStoryBox", {
                            "attachment": {
                              "text": "open",
                              "id": 1,
                              "type": "url",
                              "url": "https://vk.com/app8180762"
                            },
                            "background_type": "image",
                            "url": 'https://i.imgur.com/p2kAJpg.jpg',
                            "locked": false
                          });
                        }}>Поделиться </Button>
                    </div>
                </div>
            </Card> 
    )
    }
export default NotShareBanner;


