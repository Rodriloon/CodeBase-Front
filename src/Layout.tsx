import { Outlet } from "react-router";
import Header from "./components/Header";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex flex-col flex-1 items-center`}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
