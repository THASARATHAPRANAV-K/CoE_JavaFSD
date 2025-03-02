import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import OrderSummary from "./pages/OrderSummary";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <div className="app-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<CartPage />} />
              <Route
                path="/checkout"
                element={
                  <ProtectedRoute>
                    <Checkout />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/order-summary"
                element={
                  <ProtectedRoute>
                    <OrderSummary />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
