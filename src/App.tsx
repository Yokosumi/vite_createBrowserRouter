import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
