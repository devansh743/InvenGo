import { useState } from "react";

export default function AddItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/inventory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, quantity, category })
    });

    alert("Item added successfully");
    setName("");
    setQuantity("");
    setCategory("");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>➕ Add Inventory Item</h2>

      <form onSubmit={handleSubmit}>
        <input placeholder="Item Name" value={name}
          onChange={e => setName(e.target.value)} required />

        <br /><br />

        <input type="number" placeholder="Quantity" value={quantity}
          onChange={e => setQuantity(e.target.value)} required />

        <br /><br />

        <input placeholder="Category" value={category}
          onChange={e => setCategory(e.target.value)} required />

        <br /><br />

        <button>Add Item</button>
      </form>
    </div>
  );
}
