import { NavLink } from "react-router-dom";

export const Page404 = () => {
  return (
    <>
      <p>error page: 404</p>
      <p>
        Please return to the home{" "}
        <NavLink className="underline" to="/">
          page
        </NavLink>
        .
      </p>
    </>
  );
};
