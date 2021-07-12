import React, { useState } from "react";
import Header from "./components/Header/Header";
import MealsSummary from "./components/MealsSummary";
import MealList from "./components/Meals/MealList";
import Modal from "./components/Modal/Modal";
import ContextMeal from "./context/context-meal";
import Context from "./context/context";
function App() {
  const [isCartClicked, setIsCartClicked] = useState(false);
  const [totalItem, setTotalItem] = useState(0);
  const [itemCount, setItemCount] = useState([0, 0, 0, 0]);
  //const itemListApp=useContext(Context);
  const setTotalItemHandler = (val) => {
    setTotalItem(val);
  };
  const setIsCartClickedHandler = (event) => {
    if (event.target.classList[1] === "oneone" || event.target.id === "oneone")
      setIsCartClicked(true);
    else setIsCartClicked(false);
  };
  const setItemObjectHandler = (val) => {
    //console.log(itemObject);
    let pos;
    switch (val) {
      case "m1":
        pos = 0;
        break;
      case "m2":
        pos = 1;
        break;
      case "m3":
        pos = 2;
        break;
      case "m4":
        pos = 3;
        break;
      default:
        pos = -1;
        break;
    }
    //console.log(val,itemCount[pos]);
    setItemCount(
      /*prev=>{
    const menuIndex=prev.findIndex(item=>{
      return item.id===val;
      });
    if(menuIndex!==-1)
    {
         
    }
     
  }*/

      [
        ...itemCount.slice(0, pos),
        itemCount[pos] + 1,
        ...itemCount.slice(pos + 1),
      ]
    );
  };
  const setItemObjectDecHandler = (val) => {
    let pos;
    switch (val) {
      case "m1":
        pos = 0;
        break;
      case "m2":
        pos = 1;
        break;
      case "m3":
        pos = 2;
        break;
      case "m4":
        pos = 3;
        break;
      default:
        pos = -1;
        break;
    }
      setItemCount([
        ...itemCount.slice(0, pos),
        itemCount[pos] - 1,
        ...itemCount.slice(pos + 1),
      ]);
  };
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
          setTotalItem: setTotalItemHandler,
          itemObject: itemCount,
          setItemObject: setItemObjectHandler,
          setItemObjectDec: setItemObjectDecHandler,
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
