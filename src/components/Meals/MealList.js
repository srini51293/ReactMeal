
import cls from '../Card.module.css'
import classAvail from '../AvailableMeals.module.css'
import MealIndividual from './MealIndividual'
const MealList=()=>{
return (
        <div className={`${cls.card} ${classAvail.meals}`}>
        <MealIndividual/>
        </div>
);
};
export default MealList;