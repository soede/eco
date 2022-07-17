import React, { useEffect, useState } from 'react';




function UnitsDefine (value) {
    if(value>1){
        return `${value.toFixed(2)}км `;
      }else{
        return `${value.toFixed(2) * 1000}м `;
      }
    
}




export default UnitsDefine;
