import React, { useState } from "react";
import Header from "./components/Header/Header";
import MealsSummary from "./components/MealsSummary";
import MealList from "./components/Meals/MealList";
import Modal from "./components/Modal/Modal";
import ContextMeal from "./context/context-meal";
function App() {
  const [isCartClicked, setIsCartClicked] = useState(false);
  const setIsCartClickedHandler=(event)=>{
    console.log(event.target.classList[1]);
    if(event.target.classList[1]==="oneone"||event.target.id==="oneone")
      setIsCartClicked(true);
    else
      setIsCartClicked(false);

  }
  return (
    <ContextMeal.Provider
      value={{
        isCartClicked: isCartClicked,
        setIsCartClicked: setIsCartClickedHandler,
      }}
    >
      <div style={{'backgroundColor':'#383838'}}>
        <Header />
        <MealsSummary />
        <MealList />
        {isCartClicked && <Modal />}
      </div>
    </ContextMeal.Provider>
  );
}

export default App;
