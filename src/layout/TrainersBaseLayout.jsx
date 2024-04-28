import { Outlet } from "react-router-dom";
import { TrainerSidebarItems } from "../constants/DashboardSidebarData";
import Sidebar from "../components/sidebar/Sidebar";

const TrainersBaseLayout = () => {
  return (
    <main className="page-wrapper">
      {/* left of page */}
      <Sidebar SidebarData={TrainerSidebarItems} />
      {/* right side/content of the page */}
      <div className="content-wrapper">
        <Outlet />
      </div>
    </main>
  );
};

export default TrainersBaseLayout;
