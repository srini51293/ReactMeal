import React from 'react'
const ContextMeal=React.createContext({
    isCartButtonClicked:false,
    setIsCartButtonClicked:()=>{}
});
export default ContextMeal;