import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';


import { Panel, PanelHeader, Link, Header, Button, Group, Gradient, PanelHeaderBack, Title, TabsItem, Tabs, HorizontalCell, HorizontalScroll, PanelHeaderButton  } from '@vkontakte/vkui';


import '../css/Pages.css';
import iconsList from '../lists/Icons';


import Paper from './Paper';
import Plastic from './Plastic';
import Clothing from './Clothing';
import Tires from './Tires';
import Glass from './Glass';
import Bulb from './Bulb';
import Сaps from './Сaps';
import Metal from './Metal';
import Domestic from './Domestic';
import Hazardous from './Hazardous';
import TetraPak from './TetraPak';
import Batteries from './Batteries';
import Other from './Other'; 


 

const Pages = ({ id, go, pageId,setPopout, restatePageId, setViewPages, userLoc, setOpenPoint, userLocationforHead, pointsFullArray, goTo, itFirstStartPages, setFirstStartPages, select, setSelect  }) => {
   
	
    var firstStartPage = true 
 
    const [a, setA] = useState(false)

    useEffect(()=>{
        document.getElementById(`cell${select}`).scrollIntoView({ block: "nearest",  behavior: "smooth"} )
        setViewPages(true)
    }, [])

     
	

    let availablePages = [<Paper goTo={goTo}  userLocationforHead={userLocationforHead}  userLoc={userLoc}  setOpenPoint={setOpenPoint} pointsFullArray={pointsFullArray} select={select}/>, 
    <Plastic goTo={goTo} userLocationforHead={userLocationforHead} setOpenPoint={setOpenPoint} pointsFullArray={pointsFullArray} select={select}/>, 
    <Clothing goTo={goTo}  userLocationforHead={userLocationforHead} userLoc={userLoc}  setOpenPoint={setOpenPoint} pointsFullArray={pointsFullArray} select={select}/> , 
    <Tires goTo={goTo}  userLocationforHead={userLocationforHead} userLoc={userLoc} setOpenPoint={setOpenPoint} pointsFullArray={pointsFullArray} select={select}/>, 
    <Glass goTo={goTo} userLocationforHead={userLocationforHead}  userLoc={userLoc} setOpenPoint={setOpenPoint} pointsFullArray={pointsFullArray} select={select}/>, 
    <Bulb goTo={goTo}   userLocationforHead={userLocationforHead} userLoc={userLoc} setOpenPoint={setOpenPoint} pointsFullArray={pointsFullArray} select={select}/>, 
    <Сaps goTo={goTo}  userLocationforHead={userLocationforHead} userLoc={userLoc} setOpenPoint={setOpenPoint} pointsFullArray={pointsFullArray} select={select}/>, 
    <Metal goTo={goTo} userLocationforHead={userLocationforHead}  userLoc={userLoc} setOpenPoint={setOpenPoint} pointsFullArray={pointsFullArray} select={select}/>, 
    <Domestic goTo={goTo} userLocationforHead={userLocationforHead}  userLoc={userLoc} setOpenPoint={setOpenPoint} pointsFullArray={pointsFullArray} select={select}/>, 
    <Hazardous goTo={goTo} userLocationforHead={userLocationforHead} userLoc={userLoc}  setOpenPoint={setOpenPoint} pointsFullArray={pointsFullArray} select={select}/>, 
    <TetraPak goTo={goTo}  userLocationforHead={userLocationforHead} userLoc={userLoc} setOpenPoint={setOpenPoint} pointsFullArray={pointsFullArray} select={select}/>, 
    <Batteries goTo={goTo} setPopout={setPopout} userLocationforHead={userLocationforHead}userLoc={userLoc}  setOpenPoint={setOpenPoint} pointsFullArray={pointsFullArray} select={select}/>, 
    <Other goTo={goTo} userLocationforHead={userLocationforHead} userLoc={userLoc}  setOpenPoint={setOpenPoint} pointsFullArray={pointsFullArray} select={select}/>]

 
    
    
 
    

    availablePages.unshift(...availablePages.splice(pageId,1));

    async function updatePage(to){ 
        await setFirstStartPages(false)
        firstStartPage= false
        !firstStartPage && setSelect(to)&&restatePageId(to) 
    }


	return(
		<Panel id={id}>

            



        <PanelHeader left={<PanelHeaderBack onClick={go} data-to='home' />}className='ph-paper'>Гайды </PanelHeader>

   

                    <Tabs mode="buttons" className='tab-div-p'>
                    <HorizontalScroll 
                        showArrows={false}
                        getScrollToLeft={(i) => i - 120}
                        getScrollToRight={(i) => i + 120}
                        >

                        <div style={{ display: "flex" }}>
                        <React.Fragment>
                            {iconsList(pageId).map((item, index)=>{ 
                             
                            return(
                                <HorizontalCell id ={`cell${index}`} onClick = {()=>{  
                                    updatePage(index) 
                                    }} key={index.toString()}>
                            <TabsItem 
                                
                                selected={select ===index}>
                            { select === index? item[2]:item[1] } 
                            </TabsItem>
                            </HorizontalCell>
                            )
                        })}
                    </React.Fragment>
                        </div>
                    
                    </HorizontalScroll>
                    </Tabs> 

                
                    

                <div>{availablePages.map((item, index)=>{

                    if(itFirstStartPages){
                         if(0 ===index){
                            return(
                            <div key={index.toString()}>
                                {item}
                            </div>
                        )}
                    }else{
                         
                         if(select ===index){
                            
                            return(
                            <div key={index.toString()}>
                                {item}
                            </div>
                        )}
                    } })}</div>

             

 
                
	
	
			
		</Panel>
	);
}

Pages.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired, 
};

export default Pages;
