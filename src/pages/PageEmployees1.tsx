import { useState } from "react";
import { IEmployee } from "../interfaces";

export const PageEmployees1 = () => {
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  return (
    <>
      <p>There are {employees.length} employees:</p>
    </>
  );
};
