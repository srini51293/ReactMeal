import React from 'react'
const Context=React.createContext({
    totalItem:0,
    setTotalItem:(val)=>{},
    itemObject:[0,0,0,0],
    setItemObject:()=>[],
    setItemObjectDec:()=>[]
});
export default Context;