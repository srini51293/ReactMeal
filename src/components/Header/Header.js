import classes from "./Header.module.css";
import cls from "./HeaderCartButton.module.css";
import CartIcon from "../CartIcon";
import logo from "../meals.jpg";
import React ,{useContext} from "react";
import ContextMeal from '../../context/context-meal';
const Header = () => {
  const ctx= useContext(ContextMeal);
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1 style={{'paddingLeft':'125px'}}>ReactMeals</h1>
        <button style={{'marginRight':'125px'}} className={`${cls.button} ${'oneone'}`}  onClick={ctx.setIsCartClicked}>
          <div className={cls.icon}>
            <CartIcon/>
          </div>
          Your Cart
          <span className={`${cls.badge} ${'oneone'}`}>2</span>
        </button>
      </header>
      <header className={classes["main-image"]}>
        <img src={logo} alt="Logo" />;
      </header>
    </React.Fragment>
  );
};
export default Header;
