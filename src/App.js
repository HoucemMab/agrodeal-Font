import logo from "./logo.svg";
import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/signupPage";
import SigninPage from "./pages/signinPage";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import Layout from "./component/Layout";
import { Route, Routes } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage.";
import PurchasePage from "./pages/PurchasePage";
import { useEffect, useState } from "react";

function App() {
  const [CartItem, setCartItem] = useState([]);

  //Step 4 :
  const addToCart = (product) => {
    setCartItem([...CartItem, { ...product, qty: 1 }]);
  };
  useEffect(() => {
    console.log(CartItem);
  }, [CartItem]);
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route
          path="/productList"
          element={<ProductListPage addToCart={addToCart} />}
        />
        <Route
          path="/purchase"
          element={<PurchasePage cartItems={CartItem} />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
