import React ,{ useContext} from "react";
import classes from "../Cart.module.css";
import ContextMeal from '../../context/context-meal';
const ModalFooter=()=>{
    const ctx= useContext(ContextMeal);
    return (
      <React.Fragment>
      <div className={classes.total}>
          <span>Total Amount</span>
          <span>$33.00</span>
        </div>
        <div className={classes.actions} >
          <button onClick={ctx.setIsCartClicked} className={classes["button--alt"]}>close</button>
          <button onClick={ctx.setIsCartClicked} className={classes.button}>Order</button>
        </div >
        </React.Fragment>
    );
};
export default ModalFooter;