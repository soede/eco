import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, Title, Div, Button, Group, SimpleCell} from '@vkontakte/vkui';
import { ReactComponent as Logo } from '../img/logo.svg';
import { Icon24PlaceOutline, Icon24DoneOutline, Icon24GlobeOutline } from '@vkontakte/icons';

import '../css/Preview.css';



const Preview = props => (
	<Panel id={props.id} className='panel-p'>

        
		<Div className='main-p'>

            <div >
                <Logo className='logo-p'/>
            </div>

			<Div className='text-div-p'>
				<Title className='header-p' level="1" weight="1">Спаси Питер от мусора!</Title>
				<Title className='discription-p' level="3" weight="2"> <span class="colortext-p">есо</span> поможeт тебе в этом</Title>
			</Div>

			

			<div className='benefits-p'>
				<Group mode="plain" className='elements-p'>

					<SimpleCell
					disabled='false'
					before={<Icon24PlaceOutline />}>
						<Title className='element-p' level="3" weight="3">Мы поможем найти ближайший<br/>
						 пункт переработки</Title>
					</SimpleCell>

					<SimpleCell
					disabled='false'
					before={<Icon24DoneOutline />}
					>
					<Title aria-multiline='true' className='element-p' level="3" weight="3">За пару кликов Вы узнаете,<br/> как
					 правильно сдать мусор</Title>
					</SimpleCell>

					<SimpleCell
					className='element-p'
					disabled='false'
					before={<Icon24GlobeOutline />}
					>
					<Title className='element-p' level="3" weight="3">Будущие поколения будут <br/> Вам благодарны!</Title>
					</SimpleCell>

				</Group>
			</div>

        </Div>

		<div className='button-div-p'>
		<Button
				onClick={props.go} 
				data-to="getLoc"
				className='button-p'
				appearance='accent'
				size='l'
				>Я в деле!</Button>
		</div>

		
        
          
	</Panel>
);

Preview.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Preview;