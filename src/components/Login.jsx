import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/booking"); // Navigate to seat booking on login
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f2f2f2",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#333" }}>Login</h2>
        <form onSubmit={handleLogin} style={{ marginTop: "20px" }}>
          <input
            type="text"
            placeholder="Username"
            required
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "5px",
              border: "1px solid #ddd",
              boxSizing: "border-box",
            }}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            required
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "5px",
              border: "1px solid #ddd",
              boxSizing: "border-box",
            }}
          />
          <br />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Login
          </button>
        </form>
        <p style={{ marginTop: "20px", color: "#666" }}>
          Don't have an account?{" "}
          <a href="/signup" style={{ color: "#4CAF50", textDecoration: "none" }}>
            Signup
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
