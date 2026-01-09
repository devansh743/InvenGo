import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("staff");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          role, // ✅ VERY IMPORTANT
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Registered successfully");
        navigate("/");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.card} onSubmit={handleRegister}>
        <h2 style={styles.title}>Create Account</h2>
        <p style={styles.subtitle}>Join InvenGo</p>

        <input
          type="text"
          placeholder="Name"
          required
          style={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          required
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={styles.input}
          required
        >
          <option value="staff">Staff</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit" style={styles.button}>
          Register
        </button>

        <p style={styles.text}>
          Already have an account?{" "}
          <span style={styles.link} onClick={() => navigate("/")}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f6fa",
  },
  card: {
    width: "350px",
    padding: "30px",
    borderRadius: "10px",
    background: "#fff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: {
    marginBottom: "5px",
    color: "#1e3a8a",
  },
  subtitle: {
    marginBottom: "20px",
    color: "#555",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#1e3a8a",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  text: {
    marginTop: "15px",
    fontSize: "14px",
  },
  link: {
    color: "#1e3a8a",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Register;
