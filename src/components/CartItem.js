import React, { useContext } from "react";
import Context from "../context/context";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
 // const arr = ["m1", "m2", "m3", "m4"];
  const ctx = useContext(Context);
  // const countCopy =
  //   ctx.itemObject[
  //     arr.findIndex((item) => {
  //       return item === props.id;
  //     })
  //   ].count;
  //const [foodCount, setFoodCount] = useState(props.amount);
  const price = `$${props.price.toFixed(2)}`;
  let pos;
   switch(props.id){
    case 'm1':
      pos=0;
      break;
    case 'm2':
     pos=1;
     break;
    case 'm3':
     pos=2;
     break;
    case 'm4':
     pos=3;
     break;
     default :
     pos=-1
     break;
   }
  const onPlusClickHandler = () => {
    ctx.setItemObject(props.id);
    ctx.setTotalItem((ctx.totalItem += 1));
  };
  const onMinusClickHandler=()=>{
    let pos;
    switch (props.id) {
      case "m1":
        pos = 0;
        break;
      case "m2":
        pos = 1;
        break;
      case "m3":
        pos = 2;
        break;
      case "m4":
        pos = 3;
        break;
      default:
        pos = -1;
        break;
    }
    if(ctx.itemObject[pos]>0)
    {
      ctx.setTotalItem((ctx.totalItem -= 1));
      ctx.setItemObjectDec(props.id);
    }
  }
  // useEffect(()=>{
  //   ctx.setItemObject({
  //     id: props.id,
  //     price: props.price,
  //     name: props.name,
  //     count: foodCount,
  //   });
  // },[ctx,props.id,props.price,props.name,foodCount]);
  
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x{ctx.itemObject[pos]}</span>
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
