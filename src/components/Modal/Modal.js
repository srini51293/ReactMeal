import React, { useContext } from "react";
import CartItem from "../CartItem";
import ModalFooter from "./ModalFooter";
import classes from "../Modal.module.css";
import Context from "../../context/context";
import Dummy from "../dummy-meals";
const Modal = () => {
  const ctx = useContext(Context);

  return (
    <React.Fragment>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}>
        {Dummy.map((item, index) => {
          return (
            ctx.itemObject[index] > 0 && (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
              />
            )
          );
        })}

        <ModalFooter />
      </div>
    </React.Fragment>
  );
};
export default Modal;
