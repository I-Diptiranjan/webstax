import { MdOutlineMenu } from "react-icons/md";
import "./AreaTop.scss";
import { useContext } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { IoNotifications } from "react-icons/io5";

const AreaTop = ({ name }) => {
  const { openSidebar } = useContext(SidebarContext);

  return (
    <section className="content-area-top">
      <div className="area-top-l">
        <button
          className="sidebar-open-btn"
          type="button"
          onClick={openSidebar}>
          <MdOutlineMenu size={24} />
        </button>
        <h2 className="area-top-title">{name}</h2>
        <div className="area-top-r">
          <ul>
            <li>
              <IoNotifications />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AreaTop;
