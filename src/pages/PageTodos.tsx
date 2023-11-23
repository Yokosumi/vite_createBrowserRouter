import { useLoaderData } from "react-router-dom";

export const PageTodos = () => {
  const todos = useLoaderData() as string[];

  return (
    <>
      <p className="text-2xl">There are {todos.length} todos:</p>
      <ul className="list-disc ml-6">
        {todos.map((todo: string, index: number) => (
          <li className="text-white text-xl" key={index}>
            {todo}
          </li>
        ))}
      </ul>
    </>
  );
};
