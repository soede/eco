import React, { useEffect, useState } from 'react';

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
import { ReactComponent as BottleOn } from '../img/bottle-on.svg';
import { ReactComponent as BottleOff } from '../img/bottle-off.svg';
import { ReactComponent as TetraOn } from '../img/tetra-on.svg';
import { ReactComponent as TetraOff } from '../img/tetra-off.svg';
import { ReactComponent as EnergyOff } from '../img/energy-off.svg';
import { ReactComponent as EnergyOn } from '../img/energy-on.svg';
import { ReactComponent as OtherOff } from '../img/other-off.svg';
import { ReactComponent as OtherOn } from '../img/other-on.svg';

const colorOn = '#62A1E8';
const colorOff = '#99A2AD';

function Icons (id){
    const iconsForLearn = [
        {0: <Icon24Cards2Outline width={36} height={36} fill={colorOn} className="scroll" />, 1: <Icon24Cards2Outline fill={colorOff}/>, "text": "Бумага"},
        {0: <BottleOn width={36} height={36} className="scroll"/>, 1:<BottleOff width={28} height={28} />, "text":"Бутылки"},
        {0: <Icon28TshirtOutline fill={colorOn} width={36} height={36} className="scroll"/>, 1:<Icon28TshirtOutline fill={colorOff}/>, "text":"Одежда" },
        {0: <Icon28AppleOutline fill={colorOn} width={36} height={36} className="scroll"/>, 1: <Icon28AppleOutline fill={colorOff}/>, "text":"Пищевые отходы"},
        {0:<Icon28GridLayoutOutline fill={colorOn} width={36} height={36} className="scroll"/>, 1: <Icon28GridLayoutOutline fill={colorOff}/>,"text":"Стекло"},
        {0: <Icon28LightbulbOutline fill={colorOn} width={36} height={36} className="scroll"/>, 1: <Icon28LightbulbOutline fill={colorOff}/>, "text":"Лампочки"},
        {0:<Icon28CubeBoxOutline fill={colorOn} width={36} height={36} className="scroll"/>, 1: <Icon28CubeBoxOutline fill={colorOff}/>, "text":"Упаковки"},
        {0:<Icon28MotorcycleOutline fill={colorOn} width={36} height={36} className="scroll"/>, 1: <Icon28MotorcycleOutline fill={colorOff}/>, "text":"Метал"},
        {0:<Icon28WasherOutline fill={colorOn} width={36} height={36} className="scroll"/>, 1: <Icon28WasherOutline fill={colorOff}/>, "text":"Бытовая техника"},
        {0:<Icon28WarningTriangleOutline fill={colorOn} width={36} height={36} className="scroll"/>, 1: <Icon28WarningTriangleOutline fill={colorOff}/>, "text":"Опасные отходы"},
        {0: <TetraOn width={36} height={36} className="scroll" />, 1: <TetraOff height={23} />, "text":"Тетра Пак"},
        {0: <EnergyOn width={36} height={36} className="scroll"/>, 1: <EnergyOff width={23} height={23} />, "text":"Батарейки"},
        {0: <OtherOn  width={36} height={36} className="scroll"/>, 1: <OtherOff  width={24} height={24}/>, "text":"Другое"},
    ] 

    iconsForLearn.unshift(...iconsForLearn.splice(id,1));

    
    
    return iconsForLearn 
    
}




export default Icons;
