import React from "react";
import { EmployeeListContainer } from "./EmployeesDetails.styles.js";

const EmployeesList = ({ employee, onSelect, onDelete }) => {
  return (
    <EmployeeListContainer>
      {employee?.map((item) => (
        <div
          key={item?.id}
          onClick={() => onSelect(item)}
          style={{
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid black",
            borderRadius: "0.5rem",
            width: "90%",
            height: "max-content",
            cursor: "pointer",
            padding: "0.5rem",
            margin: "0.25rem",
          }}
        >
          <img src={item?.imageUrl} width="20px" height="20px" />
          <span>{`${item?.firstName} ${item?.lastName}`}</span>
          <span onClick={() => onDelete(item?.id)}>X</span>
        </div>
      ))}
    </EmployeeListContainer>
  );
};

export default EmployeesList;
