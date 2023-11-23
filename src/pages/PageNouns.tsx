import { useLoaderData } from "react-router-dom";
import { INoun } from "../interfaces";

export const PageNouns = () => {
  const nouns = useLoaderData() as INoun[];
  return (
    <>
      <p>there are {nouns.length} nouns:</p>
      {nouns.map((noun) => (
        <div key={noun.article}>
          {noun.article} {noun.singular}
        </div>
      ))}
    </>
  );
};
