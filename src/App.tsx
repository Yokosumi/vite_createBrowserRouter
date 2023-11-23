import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <h1 className="text-2xl mb-4">Data-Loading Site </h1>
      <Outlet />
    </>
  );
}

export default App;
