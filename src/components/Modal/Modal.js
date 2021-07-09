import React, { useContext } from "react";
import CartItem from "../CartItem";
import ModalFooter from "./ModalFooter";
import classes from "../Modal.module.css";
import Context from "../../context/context";
const Modal = () => {
  const ctx = useContext(Context);
  return (
    <React.Fragment>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}>
        {ctx.itemObject.map((item) => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              amount={item.count}
            />
          );
        })}

        <ModalFooter />
      </div>
    </React.Fragment>
  );
};
export default Modal;
