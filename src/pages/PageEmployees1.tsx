import { useEffect, useState } from "react";
import { IEmployee } from "../interfaces";
import axios from "axios";

export const PageEmployees1 = () => {
  const [employees, setEmployees] = useState<IEmployee[]>([]);

  useEffect(() => {
    setTimeout(async () => {
      const response = await axios.get(
        "https://edwardtanguay.vercel.app/share/employees.json"
      );
      const _employees = response.data;
      setEmployees(_employees);
    }, 2000);
  }, []);

  return (
    <>
      <p className="text-4xl">There are {employees.length} employees:</p>
      <ul>
        {employees.map((employee) => (
          <li className="text-3xl my-2" key={employee.employeeID}>
            {employee.firstName} {employee.lastName}
          </li>
        ))}
      </ul>
    </>
  );
};
