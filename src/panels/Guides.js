import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Panel,
	 	PanelHeader,
	  	Card,
	 	Button,
	  	Group,
	  	Div,
	  	Title,
	  	TabsItem,
	 	Tabs,
	 	CardGrid,
		PanelHeaderContent  } from '@vkontakte/vkui';

import '../css/Guides.css';
import { ReactComponent as GoButton } from '../img/go.svg';
import { ReactComponent as BottleOn } from '../img/bottle-on.svg';
import { ReactComponent as BottleOff } from '../img/bottle-off.svg';
import { ReactComponent as TetraOff } from '../img/tetra-off.svg';
import { ReactComponent as EnergyOff } from '../img/energy-off.svg';
import { ReactComponent as OtherOff } from '../img/other-off.svg';
import { ReactComponent as OtherOn } from '../img/other-on.svg';

import { 
	Icon24Cards2Outline,
	Icon28TshirtOutline,
	Icon28AppleOutline,
	Icon28GridLayoutOutline,
	Icon28LightbulbOutline,
	Icon28CubeBoxOutline,
	Icon28MotorcycleOutline,
	Icon28WasherOutline,
	Icon28WarningTriangleOutline } from '@vkontakte/icons'; 
	

const Guides = ({ id, go, fetchedUser, restateTabState, getTabState, restatePageId}) => {
 






	return(
		<Panel id={id}>

		<PanelHeader className='panelHeader-g'>
				<Tabs className='tab-div-g'>
            		<TabsItem
						onClick={(e)=>{
							go(e);
							
						}} 
						data-to="home">
						Пункты
            		</TabsItem>
					<TabsItem
						data-to="guides"
						selected={true}>
						Обучение
					</TabsItem>
				</Tabs>
        </PanelHeader>

	
		
				
			<Div> <Title weight="1" level="1"> С чего начнем?</Title></Div>
	
			<div>
			<CardGrid size="l">
			<Card onClick={(event)=>{
					go(event);
					restatePageId(0);
				}} data-to="pages" className="card-g" mode="shadow">
				<div style={{ height: 60}}>
				<Icon24Cards2Outline className='icon-g' fill="#99A2AD" width={36} height={36} />
				<Title weight="2" className='titles-g'> Бумага </Title>
				<GoButton className='go-button-g' />
				</div>
				</Card>


				<Card onClick={(event)=>{
					go(event);
					restatePageId(1);
				}} data-to="pages" className="card-g"  mode="shadow">
				<div style={{ height: 60}}>
				<BottleOff className='icon-g' width={36} height={36} />
				<Title  weight="2" className='titles-g'> Пластик </Title>
				<GoButton className='go-button-g' />
				</div>
				</Card>

				<Card onClick={(event)=>{
					go(event);
					restatePageId(2);
				}} data-to="pages" className="card-g"  mode="shadow">
				<div style={{ height: 60}}>
				<Icon28TshirtOutline className='icon-g' fill="#99A2AD" width={36} height={36} />
				<Title weight="2" className='titles-g'> Одежда </Title>
				<GoButton className='go-button-g' />
				</div>
				</Card>

				<Card onClick={(event)=>{
					go(event);
					restatePageId(3);
				}} data-to="pages" className="card-g"  mode="shadow">
				<div style={{ height: 60}}>
				<Icon28AppleOutline className='icon-g' fill="#99A2AD" width={36} height={36} />
				<Title weight="2" className='titles-g'> Пищевые отходы </Title>
				<GoButton className='go-button-g' />
				</div>
				</Card>

				<Card onClick={(event)=>{
					go(event);
					restatePageId(4);
				}} data-to="pages" className="card-g"  mode="shadow">
				<div style={{ height: 60}}>
				<Icon28GridLayoutOutline className='icon-g' fill="#99A2AD" width={36} height={36} />
				<Title weight="2" className='titles-g'> Стекло </Title>
				<GoButton className='go-button-g' />
				</div>
				</Card>
				<Card onClick={(event)=>{
					go(event);
					restatePageId(5);
				}} data-to="pages" className="card-g"  mode="shadow">
				<div style={{ height: 60}}>
				<Icon28LightbulbOutline className='icon-g' fill="#99A2AD" width={36} height={36} />
				<Title weight="2" className='titles-g'> Лампочки </Title>
				<GoButton className='go-button-g' />
				</div>
				</Card>

				<Card onClick={(event)=>{
					go(event);
					restatePageId(6);
				}} data-to="pages" className="card-g"  mode="shadow">
				<div style={{ height: 60}}>
				<Icon28CubeBoxOutline className='icon-g' fill="#99A2AD" width={36} height={36} />
				<Title weight="2" className='titles-g'> Упаковки </Title>
				<GoButton className='go-button-g' />
				</div>
				</Card>

				<Card onClick={(event)=>{
					go(event);
					restatePageId(7);
				}} data-to="pages" className="card-g"  mode="shadow">
				<div style={{ height: 60}}>
				<Icon28MotorcycleOutline className='icon-g' fill="#99A2AD" width={36} height={36} />
				<Title weight="2" className='titles-g'> Металл </Title>
				<GoButton className='go-button-g' />
				</div>
				</Card>

				<Card onClick={(event)=>{
					go(event);
					restatePageId(8);
				}} data-to="pages" className="card-g"  mode="shadow">
				<div style={{ height: 60}}>
				<Icon28WasherOutline className='icon-g' fill="#99A2AD" width={36} height={36} />
				<Title weight="2" className='titles-g'> Бытовые отходы </Title>
				<GoButton className='go-button-g' />
				</div>
				</Card>

				<Card onClick={(event)=>{
					go(event);
					restatePageId(9);
				}} data-to="pages" className="card-g"  mode="shadow">
				<div style={{ height: 60}}>
				<Icon28WarningTriangleOutline className='icon-g' fill="#62A1E8" width={36} height={36} />
				<Title weight="2" className='titles-g'> Опасные отходы </Title>
				<GoButton className='go-button-g' />
				</div>
				</Card>
				
				<Card onClick={(event)=>{
					go(event);
					restatePageId(10);
				}} data-to="pages" className="card-g"  mode="shadow">
				<div style={{ height: 60}}>
				<TetraOff className='icon-g' width={36} height={36} />
				<Title weight="2" className='titles-g'> Тетра Пак </Title>
				<GoButton className='go-button-g' />
				</div>
				</Card>

				<Card onClick={(event)=>{
					go(event);
					restatePageId(11);
				}} data-to="pages" className="card-g"  mode="shadow">
				<div style={{ height: 60}}>
				<EnergyOff className='icon-g' width={36} height={36} />
				<Title weight="2" className='titles-g'> Батарейки </Title>
				<GoButton className='go-button-g' />
				</div>
				</Card>


				<Card onClick={(event)=>{
					go(event);
					restatePageId(12);
				}} data-to="pages" className="card-g"  mode="shadow">
				<div style={{ height: 60}}>
				<OtherOff className='icon-g' width={36} height={36} fill='#62A1E8'/>
				<Title weight="2" className='titles-g'> Другое </Title>
				<GoButton className='go-button-g' />
				</div>
				</Card>

				
			</CardGrid>

			
			</div>
			
			


		
	
			
		</Panel>
	);
}

Guides.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Guides;
