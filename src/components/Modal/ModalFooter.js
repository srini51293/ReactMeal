import React, { useContext } from "react";
import classes from "../Cart.module.css";
import ContextMeal from "../../context/context-meal";
import Context from "../../context/context";
const ModalFooter = () => {
  let totalAmount = 0;
  const ctx = useContext(ContextMeal);
  const itemctx = useContext(Context);
  itemctx.itemObject.forEach((item, index) => {
    if (item !== 0) {
      switch (index) {
        case 0:
          totalAmount += item * 22.99;
          break;
        case 1:
          totalAmount += item * 16.5;
          break;
        case 2:
          totalAmount += item * 12.99;
          break;
        case 3:
          totalAmount += item * 18.99;
          break;
        default:
          totalAmount = -1;
          break;
      }
    }
  });
  const onOrderClickHandler = () => {
    let orderCheck=0;
    itemctx.itemObject.map((item) => {
      if(item!==0)
        orderCheck=1;
      return 0;
    });
  
    if(orderCheck===0)
    return;
  alert("Order is on the way!!!");
    console.log("Ordering!!!");
  };

  const price = `${totalAmount.toFixed(2)}`;
  return (
    <React.Fragment>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${price}</span>
      </div>
      <div className={classes.actions}>
        <button
          onClick={ctx.setIsCartClicked}
          className={classes["button--alt"]}
        >
          close
        </button>
        <button onClick={onOrderClickHandler} className={classes.button}>
          Order
        </button>
      </div>
    </React.Fragment>
  );
};
export default ModalFooter;
