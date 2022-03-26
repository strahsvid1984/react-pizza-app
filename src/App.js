import "./assets/scss/app.scss";
import Header from "./components/header/Header";
import ContentPage from "./pages/ContentPage";
import { Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import { useSelector } from "react-redux";
import { getOrderPizzas } from "./redux/cartSlice";
import EmptyCartPage from "./pages/EmptyCartPage";

function App() {
  const orderList = useSelector(getOrderPizzas);

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path={"/"} element={<ContentPage />} />
        <Route
          path={"/cart"}
          element={orderList.length > 0 ? <CartPage /> : <EmptyCartPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
