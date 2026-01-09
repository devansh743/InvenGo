import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Inventory() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/inventory")
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>📦 Inventory</h1>

      {items.length === 0 ? (
        <p>No items found</p>
      ) : (
        <table border="1" cellPadding="10" width="100%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td style={{ color: item.quantity < 5 ? "red" : "green" }}>
                  {item.quantity < 5 ? "Low Stock" : "Available"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <br />
      <button onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </button>
    </div>
  );
}
