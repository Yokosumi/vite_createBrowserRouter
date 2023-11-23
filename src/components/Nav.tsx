import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <nav>
        <ul className="flex gap-3 bg-violet-700 py-3 px-5 my-3 rounded">
          <li>
            <NavLink to="/welcome"> Welcome</NavLink>
          </li>
          <li>
            <NavLink to="about">About </NavLink>
          </li>
          <li>
            <NavLink to="todos">Todos </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
