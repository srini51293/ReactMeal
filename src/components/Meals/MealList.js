import React,{useContext} from 'react'
import cls from "../Card.module.css";
import classAvail from "../AvailableMeals.module.css";
import MealIndividual from "./MealIndividual";
import Context from '../../context/context'
const MealList = () => {
const Itemcontext = useContext(Context)
  //console.log("meallist line 8",Itemcontext.itemObject)
  const DUMMY_ITEM=[{
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    count:Itemcontext.itemObject[0]
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    count:Itemcontext.itemObject[1]
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    count:Itemcontext.itemObject[2]
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    count:Itemcontext.itemObject[3]
  }];
  const setCountOfItemHandler=(id)=>{
    Itemcontext.setItemObject(id)
  }
  return (
    <div className={`${cls.card} ${classAvail.meals}`}>
      {DUMMY_ITEM.map(function (item) {
        return (
          <MealIndividual
            count={item.count}
            key={item.id}
            itemid={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            setCountOfItem={setCountOfItemHandler}
          />
        );
      })}
    </div>
  );
};
export default MealList;
