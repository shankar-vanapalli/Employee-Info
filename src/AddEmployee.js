import React, { useState } from "react";

import { Overlay, Modal } from "./EmployeesDetails.styles";

const AddEmployee = ({ onClose, onSubmit }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form", form);
    onSubmit({
      id: Date.now(),
      ...form,
      contactNumber: Number(form.phone),
    });
  };

  return (
    <Overlay>
      <Modal>
        <h3>Add Employee</h3>
        <form onSubmit={handleSubmit}>
          <input
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            required
          />
          <input
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            required
          />
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            name="phone"
            type="number"
            placeholder="Phone"
            onChange={handleChange}
            required
          />

          <textarea
            name="address"
            placeholder="Address"
            onChange={handleChange}
          />

          <div style={{ marginTop: "1rem" }}>
            <button type="submit">Add</button>
            <button
              type="button"
              onClick={onClose}
              style={{ marginLeft: "1rem" }}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </Overlay>
  );
};

export default AddEmployee;
