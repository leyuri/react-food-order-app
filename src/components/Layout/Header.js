import { Fragment } from "react";
import mealsImages from "../../assets/meals.jpeg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImages} al="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
