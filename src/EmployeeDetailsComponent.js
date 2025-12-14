import React from "react";

const EmployeeDetailsComponent = ({ employee }) => {
  if (!employee) {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        Select Employee to view details
      </div>
    );
  }
  return (
    <div>
      <img src={employee?.imageUrl} width="50%" />
      <h2>
        {employee?.firstName} {employee?.lastName}
      </h2>
      <p>Email: {employee?.email}</p>
      <p>Phone: {employee?.contactNumber}</p>
      <p>Address: {employee?.address}</p>
    </div>
  );
};

export default EmployeeDetailsComponent;
