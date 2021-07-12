import React,{useContext}  from "react";
import classform from "../MealItemForm.module.css";
import classes from "../MealItem.module.css";
import classinput from "../Input.module.css";
import Context from "../../context/context"
const MealIndividual = (props) => {
  // const arr = ["m1", "m2", "m3", "m4"];
   const totalCtx = useContext(Context);
   let pos;
   switch(props.itemid){
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
  // const [mealItemCount, setMealItemCount] = useState(0);
  // console.log((totalCtx.itemObject[0]));
  const onClickHandler = (event) => {
    props.setCountOfItem(props.itemid);
    //alert("hello");
    // setMealItemCount((mealItemCount!==0?
    //   totalCtx.itemObject[
    //     arr.findIndex((item) => {
    //       return item === props.itemid;
    //     })
    //   ].count
    // : mealItemCount) + 1);
    // setMealItemCount((totalCtx.itemObject[
    //        arr.findIndex((item) => {
    //          return item === props.itemid;
    //        })
    //      ].count)+1)
     totalCtx.setTotalItem((totalCtx.totalItem += 1));
  };
  // useEffect(() => {
  //   totalCtx.setItemObject({
  //     id: props.itemid,
  //     price: props.price,
  //     name: props.name,
  //     count: +mealItemCount,
  //   });
  // }, [mealItemCount, props.itemid,props.price,props.name,totalCtx]);
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
            value={totalCtx.itemObject[pos]
            //   mealItemCount!==0?
            //   console.log(totalCtx.itemObject[
            //     arr.findIndex((item) => {
            //       return item === props.itemid;
            //     })
            //   ])
            // : mealItemCount
            //mealItemCount!==0?console.log("true of mealItemCount"):console.log("false of mealItemCount")
            }
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
