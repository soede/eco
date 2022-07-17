import React, { useEffect, useState } from 'react';




function EmojiDefine (itemHead) {
    switch (itemHead) {
		case 'Бумага':
			return '📄';
			break;

		case 'Стекло':
			return "🍷";
			break;

		case 'Металл':
			return "🚲";
			break;

		case 'Тетра Пак':
			return "🧃";
			break;

		case 'Упаковки':
			return "📦";
			break;

		case 'Одежда':
			return "👕";
			break;

		case 'Батарейки':
			return "🔋";
			break;

		case 'Крышечки':
			return "🟢";
			break;

		case 'Шины':
			return "🚗";
			break;

		case 'Опасные отходы':
			return "⚠️";
			break;

			
		case 'Бытовая техника':
			return "🏠";
			break;

		case 'Лампочки':
			return "💡";
			break;
				
		case 'Пищевые отходы':
			return "🍕";
			break;

		case 'Пластик':
			return '🥏';
			break;
			
		case 'Иное':
			return "❓";
			break;
        default:
            return "❓";
	}


}




export default EmojiDefine;