import React from 'react'
import cls from "../Card.module.css";
import classAvail from "../AvailableMeals.module.css";
import MealIndividual from "./MealIndividual";
const MealList = () => {


  const DUMMY_ITEM=[{
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    count:0
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    count:0
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    count:0
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    count:0
  }];
  return (
    <div className={`${cls.card} ${classAvail.meals}`}>
      {DUMMY_ITEM.map(function (item) {
        return (
          <MealIndividual
            key={item.id}
            itemid={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        );
      })}
    </div>
  );
};
export default MealList;
