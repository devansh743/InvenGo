import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import AddItem from "./pages/AddItem";
import Vendors from "./pages/Vendors";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/add" element={<AddItem />} />
        <Route path="/vendors" element={<Vendors />} />
      </Routes>
    </BrowserRouter>
  );
}
