import React from 'react'
const Context=React.createContext({
    totalItem:0,
    setTotalItem:(val)=>{},
    itemObject:[
        
      ],
    setItemObject:()=>[]
});
export default Context;