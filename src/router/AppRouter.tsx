import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProductsList from "../pages/ProductsList";
import ProductDetail from "../pages/ProductDetail";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
    );
}