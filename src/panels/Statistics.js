import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, Title, Div, Button} from '@vkontakte/vkui';
import { ReactComponent as Statistic } from '../img/statistics.svg';

import '../css/Statistics.css';



const Statistics = ({ id, go, setPopout}) => {


	setPopout(null);
	
	const setFirst= () =>{

		 
			



 
 
	  
	}
	
	
	
	
	
	return(
	

	<Panel id={id}>
		<Div className='main-s'>
			<Div  className='text-div-s' >
			<Title className='title-s' level="1"> В чём проблема? </Title>
			<Title className="discription-s" level="2" weight='2'>Площадь свалок в России равна 4 Кипрам и эта цифра растёт с каждым годом </Title>
			</Div >
			<Div  style={{ paddingTop: 60, paddingLeft: 10}}>
				 <Statistic className='svg-s'/>
			 </Div>
			
			
			
			
			

			
			<div className='button-div-s'>

			<Div>
				<Button
				onClick={(e)=>{
					go(e);
					setFirst();
					
				}} 
				data-to="preview"
				className='button-s'
				appearance='accent'
				size='l'
				>Нужно это остановить!</Button>
			</Div>

			</div>
		</Div>
		
        
          
	</Panel>
);}

Statistics.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Statistics;