import React, { useEffect } from "react";
import PizzaBlock from "./PizzaBlock";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzas, getListOfPizzas } from "../../redux/cartSlice";

const ContentItems = () => {
  const pizzas = useSelector(getListOfPizzas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch, pizzas]);

  return (
    <div className="content__items">
      {pizzas.map((p, index) => (
        <PizzaBlock
          price={p.price}
          index={index}
          pizzaSizes={p.sizes}
          img={p.imageUrl}
          pizzaName={p.name}
          doughTypes={p.types}
        />
      ))}
    </div>
  );
};

export default ContentItems;
