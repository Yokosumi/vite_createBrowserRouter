import { useLoaderData } from "react-router-dom";
import { INoun } from "../interfaces";

export const PageNouns = () => {
  const nouns = useLoaderData() as INoun[];
  return (
    <>
      {nouns.length}
      <div>nouns page</div>
    </>
  );
};
