import { useEffect, useState } from "react";
import { IEmployee } from "../interfaces";
import { ImSpinner9 } from "react-icons/im";
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
      {employees.length !== 0 ? (
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
      ) : (
        <div className="flex justify-center items-start h-screen mt-6">
          <ImSpinner9 className="animate-spin text-pink-500 text-7xl" />
        </div>
      )}
    </>
  );
};
