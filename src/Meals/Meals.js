import React from "react";
import { MealSummary } from "./MealSummary";
import { MealItem } from "../Meals/MealItems/MealItem"
import { Card } from "../UI/Card";
import classes from "./Meals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

export const Meals = () => {
  const meals = DUMMY_MEALS.map((meals) => (
    <ul key={meals.id} className={classes.mealbox}>
      <MealItem meals={meals}/>
    </ul>
  ));
  return (
    <>
      <MealSummary />
      <Card>{meals}</Card>
    </>
  );
};
