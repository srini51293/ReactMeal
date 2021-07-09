import React, { useState, useContext } from "react";
import classform from "../MealItemForm.module.css";
import classes from "../MealItem.module.css";
import classinput from "../Input.module.css";
import Context from "../../context/context";
const MealIndividual = (props) => {
  const arr = ["m1", "m2", "m3", "m4"];
  const totalCtx = useContext(Context);
  const [mealItemCount, setMealItemCount] = useState(0);
  const onClickHandler = (event) => {
    setMealItemCount((prev) => ( event.target.value= prev + 1));
    totalCtx.setTotalItem((totalCtx.totalItem += 1));
    totalCtx.setItemObject({
      id: props.itemid,
      price: props.price,
      name: props.name,
      count: +mealItemCount,
    });
  };
  return (
    <React.Fragment>
      <div className={classes.meal}>
        <ul>
          <li>
            <h3>{props.name}</h3>
          </li>
          <li>
            <span className={classes.description}>{props.description}</span>
          </li>
          <li>
            <span className={classes.price}>{props.price}</span>
          </li>
        </ul>
        <div className={classform.form}>
          <h3 style={{ float: "left", paddingRight: "10px" }}>Amount</h3>
          <input
            style={{ width: "35px" }}
            min="0"
            value={mealItemCount!==0?
              totalCtx.itemObject[
                arr.findIndex((item) => {
                  return item === props.itemid;
                })
              ].count
            :mealItemCount}
            className={classinput.input}
            type="number"
            readOnly
          />

          <button onClick={onClickHandler}>+Add</button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default MealIndividual;
