import React, { useState } from "react";

const PizzaBlock = ({ doughTypes, pizzaSizes, pizzaName, img, price }) => {
  const [countPizza, setCountPizza] = useState(0);

  const [selectType, setSelectType] = useState(0);
  const [selectSize, setSelectSize] = useState(0);

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={img} alt="Pizza" />
      <h4 className="pizza-block__title">{pizzaName}</h4>
      <div className="pizza-block__selector">
        <ul>
          {doughTypes.map((d, index) => (
            <li
              className={selectType === index ? "active" : null}
              onClick={() => setSelectType(index)}
            >
              {d}
            </li>
          ))}
        </ul>
        <ul>
          {pizzaSizes.map((s, index) => (
            <li
              className={index === selectSize ? "active" : null}
              onClick={() => setSelectSize(index)}
            >
              {s} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span onClick={() => setCountPizza(countPizza + 1)}>Добавить</span>
          <i>{countPizza}</i>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
