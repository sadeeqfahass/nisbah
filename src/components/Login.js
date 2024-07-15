import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields
    const isEmptyField = Object.values(formData).some((value) => value === "");

    if (isEmptyField) {
      alert("Please fill out all fields");
    } else {
      // Submit form
      alert("Form Submitted");
    }
  };

  return (
    <div className="login-con">
        <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleInputChange("email")}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleInputChange("password")}
        />

        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
