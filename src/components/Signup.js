import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    dob: "",
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
    <div className="signup-con">
        
        <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.firstName}
          onChange={handleInputChange("firstName")}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.lastName}
          onChange={handleInputChange("lastName")}
        />

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
          label="Phone Number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.phone}
          onChange={handleInputChange("phone")}
        />
        <TextField
          label="Address"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.address}
          onChange={handleInputChange("address")}
        />
        <TextField
          label="State"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.state}
          onChange={handleInputChange("state")}
        />
        <TextField
          label="Date of Birth"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.dob}
          onChange={handleInputChange("dob")}
        />

        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </form>
    </div>
  );
}

export default Signup;
