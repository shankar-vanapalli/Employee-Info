import React, { useState, useEffect } from "react";
import EmployeesList from "./EmployeesList";
import EmployeeDetailsComponent from "./EmployeeDetailsComponent";
import AddEmployee from "./AddEmployee";
import {
  EmployeeWrapper,
  EmployeeHeader,
  EmployeeTitle,
  AddEmployeeButton,
  EmployeeDetailsContainer,
  EmployeeDetails,
} from "./EmployeesDetails.styles";
const EmployeesDetails = () => {
  const [employeesData, setEmployeesData] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("./employeesInfo.json");
        const data = await response?.json();
        setEmployeesData(data);
        console.log("Data fetched", data);
      } catch (err) {
        console.log("Error", err);
      }
    }

    fetchData();
  }, []);

  const handleDelete = (id) => {
    setEmployeesData((prev) => {
      const updatedEmployeesList = prev.filter((emp) => emp?.id !== id);
      if (selectedEmployee?.id === id) {
        setSelectedEmployee(
          updatedEmployeesList?.length > 0 ? updatedEmployeesList[0] : null
        );
      }

      return updatedEmployeesList;
    });
  };

  const handleAddEmployee = (newEmp) => {
    console.log("new emo", newEmp);
    setEmployeesData((prev) => [newEmp, ...prev]);
    setSelectedEmployee(newEmp);
    setShowModal(false);
  };

  return (
    <EmployeeWrapper>
      <EmployeeHeader>
        <EmployeeTitle>Employees Management</EmployeeTitle>
        <AddEmployeeButton onClick={() => setShowModal(true)}>
          Add Employee
        </AddEmployeeButton>
      </EmployeeHeader>
      <EmployeeDetailsContainer>
        <EmployeesList
          employee={employeesData}
          onSelect={setSelectedEmployee}
          onDelete={handleDelete}
        />
        <EmployeeDetailsComponent employee={selectedEmployee} />
      </EmployeeDetailsContainer>

      {showModal && <AddEmployee onSubmit={handleAddEmployee} />}
    </EmployeeWrapper>
  );
};

export default EmployeesDetails;
