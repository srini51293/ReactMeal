import classes from './CartItem.module.css';

const CartItem = (props) => {
 // const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>Schnitzel{/*{props.name}*/}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>$16.5{/*{price}*/}</span>
          <span className={classes.amount}>x 2{/*{props.amount}*/}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
