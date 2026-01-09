import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h1>📦 InvenGo Dashboard</h1>
      <p className="subtitle">Smart Inventory Management System</p>

      <div className="cards">
        <div className="card" onClick={() => navigate("/inventory")} style={{ cursor: "pointer" }}>
          <h3>Inventory</h3>
          <p>View all items</p>
        </div>

        <div className="card" onClick={() => navigate("/add")}>
          <h2>Add Item</h2>
          <p>Add new stock</p>
        </div>

        <div className="card" onClick={() => navigate("/vendors")}>
          <h2>Vendors</h2>
          <p>Manage suppliers</p>
        </div>
      </div>
    </div>
  );
}
