import React from "react";
import classform from "../MealItemForm.module.css";
import classes from "../MealItem.module.css";
import classinput from "../Input.module.css"
const MealIndividual = () => {
  return (
    <React.Fragment>
      <div className={classes.meal}>
        <ul>
          <li>
            <h3>Sushi</h3>
          </li>
          <li>
            <span className={classes.description}>Finest fish and veggies</span>
          </li>
          <li>
            <span className={classes.price}>$29.99</span>
          </li>
        </ul>
        <div className={classform.form}>
            
            <h3 style={{'float':'left','paddingRight':'10px'}}>Amount</h3>    
            <input style={{'width':'35px'}} min="0" className={classinput.input} type="number"/>    
            
          <button>+Add</button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default MealIndividual;
