import styled from "styled-components";

const EmployeeWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
`;

const EmployeeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0 2rem 0;
`;

const EmployeeTitle = styled.h2`
  font-family: sans-serif;
`;

const AddEmployeeButton = styled.button`
  padding: 0.5rem;
  background-color: blue;
  color: white;
  border: none;
  height: max-content;
  cursor: pointer;
`;

const EmployeeDetailsContainer = styled.div`
  width: 100%;
  background-color: lightgrey;
  display: flex;
  gap: 2rem;
  border: 1px solid black;
  height: 100vh;
`;
const EmployeeListContainer = styled.div`
  display: flex;
  margin: 0.5rem;
  padding: 0.5rem;
  width: 40%;
  overflow-y: auto;
  overflow-x: hidden;
  flex-direction: column;
  border: 1px solid black;
`;

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
`;

const Modal = styled.div`
  background: white;
  border: 1px solid black;
  width: 70%;
  padding: 1.5rem;
  border-radius: 0.5rem;
`;

export {
  EmployeeWrapper,
  EmployeeHeader,
  EmployeeTitle,
  AddEmployeeButton,
  EmployeeDetailsContainer,
  EmployeeListContainer,
  Overlay,
  Modal,
};
