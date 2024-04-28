import Sidebar from "../components/sidebar/Sidebar";
import { TASidebarItems } from "../constants/DashboardSidebarData";
import { Outlet } from "react-router-dom";

const TABaseLayout = () => {
  return (
    <main className="page-wrapper">
      {/* left of page */}
      <Sidebar SidebarData={TASidebarItems} />
      {/* right side/content of the page */}
      <div className="content-wrapper">
        <Outlet />
      </div>
    </main>
  );
};

export default TABaseLayout;
