import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Login successful");
        navigate("/dashboard");
      } else {
        alert(data.message || "Login failed");
      }
      if (res.ok) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      }

    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.card} onSubmit={handleLogin}>
        <h2 style={styles.title}>InvenGo</h2>
        <p style={styles.subtitle}>Smart Inventory Management</p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Login
        </button>

        <p style={styles.text}>
          New user?{" "}
          <span
            style={styles.link}
            onClick={() => navigate("/register")}
          >
            Register
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
    outline: "none",
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

export default Login;
