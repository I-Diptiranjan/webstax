import Sidebar from "../components/sidebar/Sidebar";
import { organisationSidebarItems } from "../constants/DashboardSidebarData";
import { Outlet } from "react-router-dom";

const OrgBaseLayout = () => {
  return (
    <main className="page-wrapper">
      {/* left of page */}
      <Sidebar SidebarData={organisationSidebarItems} />
      {/* right side/content of the page */}
      <div className="content-wrapper">
        <Outlet />
      </div>
    </main>
  );
};

export default OrgBaseLayout;
