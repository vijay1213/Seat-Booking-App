import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/"); // Navigate to login after signup
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Username" required />
        <br />
        <input type="password" placeholder="Password" required />
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
