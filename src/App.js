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
import AdminLoginPage from "./pages/AdminLoginPage";
import AddProductPage from "./pages/AddProductPage";
import AdminProductPage from "./pages/AdminProductPage";
import AdminUserPage from "./pages/AdminUserPage";
import CommandsPage from "./pages/CommandsPage";
import AdminDashboard from "./pages/Dashboard";

function App() {
  const [CartItem, setCartItem] = useState([]);

  //Step 4 :
  const addToCart = (product) => {
    setCartItem([...CartItem, { ...product }]);
  };
  useEffect(() => {
    console.log("FROM APP ", CartItem);
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
          element={<PurchasePage CartItem={CartItem} />}
        />
        <Route path="/admin/addproduct" element={<AddProductPage />} />
        <Route path="/admin/productPage" element={<AdminProductPage />} />
        <Route path="/admin/usermanagement" element={<AdminUserPage />} />
        <Route path="/admin/commands" element={<CommandsPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        <Route path="/admin/login" element={<AdminLoginPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
