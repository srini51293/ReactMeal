import React, { useState, useContext } from "react";
import Context from "../context/context";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const arr = ["m1", "m2", "m3", "m4"];
  const ctx = useContext(Context);
  const countCopy =
    ctx.itemObject[
      arr.findIndex((item) => {
        return item === props.id;
      })
    ].count;
  const [foodCount, setFoodCount] = useState(countCopy);
  const price = `$${props.price.toFixed(2)}`;
  const onPlusClickHandler = () => {
    setFoodCount((prev) => {
      return (prev = prev + 1);
    });
    ctx.setItemObject({
      id: props.id,
      price: props.price,
      name: props.name,
      count: foodCount,
    });
  };
  const onMinusClickHandler = () => {};
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x{countCopy}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onMinusClickHandler}>−</button>
        <button onClick={onPlusClickHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
