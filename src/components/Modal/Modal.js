import React from "react";
import CartItem from "../CartItem";
import ModalFooter from "./ModalFooter";
import classes from "../Modal.module.css";
const Modal = () => {
  return (
    <React.Fragment>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}>
        <CartItem />
        <ModalFooter/>
      </div>
    </React.Fragment>
  );
};
export default Modal;
