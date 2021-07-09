import React, { useState } from "react";
import Header from "./components/Header/Header";
import MealsSummary from "./components/MealsSummary";
import MealList from "./components/Meals/MealList";
import Modal from "./components/Modal/Modal";
import ContextMeal from "./context/context-meal";
import Context from "./context/context";
function App() {
  const [isCartClicked, setIsCartClicked] = useState(false);
  const [totalItem,setTotalItem]=useState(0);
  const [itemObject,setItemObject]=useState([]);
  const setTotalItemHandler=(val)=>{
    setTotalItem(val);
  }
  const setIsCartClickedHandler = (event) => {
    if (event.target.classList[1] === "oneone" || event.target.id === "oneone")
      setIsCartClicked(true);
    else setIsCartClicked(false);
  };
  const setItemObjectHandler=(val)=>{
    console.log(itemObject);
    setItemObject(prev=>{
    const menuIndex=prev.findIndex(item=>{
      return item.id===val.id;
      });
    if(menuIndex!==-1)
    {
      prev[menuIndex].count=val.count;
    }
    else{
      const temp=[...prev];
      prev=[...temp,val]  
    
    }
    return prev;
  });
  }
  return (
    <ContextMeal.Provider
      value={{
        isCartClicked: isCartClicked,
        setIsCartClicked: setIsCartClickedHandler,
      }}
    >
      <Context.Provider
        value={{
          totalItem: totalItem,
          setTotalItem:setTotalItemHandler,
          itemObject:itemObject,
          setItemObject:setItemObjectHandler
        }}
      >
        <div style={{ backgroundColor: "#383838" }}>
          <Header />
          <MealsSummary />
          <MealList />
          {isCartClicked && <Modal />}
        </div>
      </Context.Provider>
    </ContextMeal.Provider>
  );
}

export default App;
