import { FC } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";
import ThemeSwitcher from "../components/ThemeSwitcher";

const Layout: FC = () => {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <NavBar />
      <ThemeSwitcher />
      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
