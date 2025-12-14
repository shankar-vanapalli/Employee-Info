import { useState } from "react";
import "./styles.css";
import EmployeesDetails from "./EmployeesDetails";

export default function App() {
  const [showEmployees, setShowEmployees] = useState(true);
  return (
    <div className="App">
      <button onClick={(e) => setShowEmployees((e) => !e)}>
        View Employees Info
      </button>

      {showEmployees && <EmployeesDetails />}
    </div>
  );
}
