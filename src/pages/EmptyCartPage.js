import React from "react";
import { Link } from "react-router-dom";
import emptyCartImg from "../assets/img/empty-cart.png";

const EmptyCartPage = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="container container--cart">
          <div className="cart cart--empty">
            <h2>
              Корзина пустая <icon>😕</icon>
            </h2>
            <p>
              Вероятней всего, вы ещё не заказывали пиццу.
              <br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={emptyCartImg} alt="Empty cart" />
            <a href="/" className="button button--black">
              <Link to={"/"}>
                <span>Вернуться назад</span>
              </Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCartPage;
