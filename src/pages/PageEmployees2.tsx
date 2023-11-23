import { useQuery } from "@tanstack/react-query";
import { ImSpinner9 } from "react-icons/im";
import { IEmployee } from "../interfaces";
import * as appModel from "../appModel";

export const PageEmployees2 = () => {
  const employeesQuery = useQuery<IEmployee[]>({
    queryKey: ["employees"],
    queryFn: async () => appModel.getEmployees(),
  });

  if (employeesQuery.isLoading) {
    return <ImSpinner9 className="animate-spin text-pink-500 text-7xl" />;
  }
  if (employeesQuery.isError) {
    return <pre>there was an error</pre>;
  }

  return (
    <>
      {employeesQuery.data && (
        <p> there are {employeesQuery.data?.length} employees</p>
      )}
    </>
  );
};
