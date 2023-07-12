import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

const Root = () => {
  return (
    <>
    <nav>
      <Navigation />
    </nav>
    <main>
      <Outlet />
    </main>
    </>
  )
}

export default Root;