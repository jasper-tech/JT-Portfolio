import { FC } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";

const Layout: FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
