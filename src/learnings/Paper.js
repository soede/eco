 
import '../css/LearnPages.css';
import { Panel, Div, PanelHeader, Spacing, Button, Text, PanelHeaderBack, Title, TabsItem, Tabs, HorizontalCell, HorizontalScroll, PanelHeaderButton  } from '@vkontakte/vkui';

import CountDistance from '../tools/CountDistance'; //расчет дистанции


import { Icon28LocationMapOutline } from '@vkontakte/icons';


const Paper = ({setOpenPoint, goTo, pointsFullArray, userLocationforHead }) =>{


	return(
        <Div>
            <Title className='headerPage' level="1">Бумага</Title>
            <Spacing size={16} />
            <Title  className='forColor' level="2" >Что можно сдать?</Title>
            <Spacing size={8} />
            <Text>Газеты, книги, офисную бумагу, альбомы, тетради и листовки, а также коробки и картон, в том числе гофрированный. Бумажную упаковку с маркировками 20, 21 и 22 (PAP).</Text>
            <Spacing size={16} />
            <Title className='forColor' level="2" >Что нельзя сдавать?</Title>
            <Spacing size={8} />
            <Text>Фотографии, чеки и другую термобумагу, туалетную бумагу и салфетки, бумагу для запекания, а также грязную - жирную или масляную. Бумажные стаканчики и любую бумажную одноразовую посуду, которая покрыта пленкой.</Text>
            <Spacing size={16} />
            <Title className='forColor' level="2" >Как подготовить к переработке?</Title>
            <Spacing size={8} />
            <Text>
                <div><span className="forColor">•</span>Вытащить металлические элементы, убрать пластик и скотч.</div>
                <br />
                <div><span className="forColor">•</span>Проверить, не грязная ли бумага, сложить в кипы и перевязать их веревкой. </div>
                <br />
                <div><span className="forColor">•</span>Проверить, примут ли у вас изделие, можно надорвав его - если внутри бумага белая, то сдавать можно.</div>
            </Text>


            <div className='button-div-s'>

			<Div>
				<Button
				onClick={(e)=>{
					async function toMap(){
                        var itCategory =[]
                        await pointsFullArray.map((mainItem)=>{
                            if(mainItem.Category === 'Бумага'){ 
                                mainItem.Objects.map((item)=>{
                                    const newItem = { 
                                        Category: mainItem.Category,
                                        log: item.geometry.coordinates[0],
                                        lat: item.geometry.coordinates[1],
                                        open: false,
                                        title: item.properties.title,
                                        address: item.properties.address,
                                        contentText: item.properties.content_text
            
                                    }
                                    itCategory.push(newItem) 
                                })
                            }
                        })
                        async function checkObj (itCategoryz){
                            if(itCategoryz.length>100){
                                var sorArrayws = await itCategoryz.sort((a, b) =>CountDistance(userLocationforHead.lat,  userLocationforHead.long, a.lat, a.log) > CountDistance( userLocationforHead.lat,userLocationforHead.long, b.lat, b.log) ? 1 : -1)
                                 
                                await setOpenPoint(sorArrayws.slice(0, 48));
                            }else{
                                await setOpenPoint(itCategoryz);
                            }
                        }
                        await checkObj(itCategory)
                        await goTo('mapPanel');
                    }
                    toMap()
				}} 
				className='button-s'
				appearance='accent'
				size='l'
                before={<Icon28LocationMapOutline />}
				>Открыть пункты</Button>
			</Div>

			</div>
        </Div>



        

        
    )
    }
export default Paper;
