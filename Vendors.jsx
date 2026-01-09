import { useNavigate } from "react-router-dom";

export default function Vendors() {
  const navigate = useNavigate();

  const vendors = [
    { id: 1, name: "Tech Supplies Ltd", contact: "9876543210" },
    { id: 2, name: "Office Mart", contact: "9123456789" }
  ];

  return (
    <div style={styles.container}>
      <h1>Vendors</h1>

      <ul style={styles.list}>
        {vendors.map(v => (
          <li key={v.id} style={styles.item}>
            <strong>{v.name}</strong> <br />
            Contact: {v.contact}
          </li>
        ))}
      </ul>

      <button style={styles.btn} onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  item: {
    background: "#fff",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  },
  btn: {
    padding: "10px 15px",
    background: "#1e3c72",
    color: "#fff",
    border: "none",
    borderRadius: "5px"
  }
};
