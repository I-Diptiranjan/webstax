import { Calendar } from "react-date-range";
import AreaTop from "../areaTop/AreaTop";
import AreaBarChart from "./AreaBarChart";
import AreaProgressChart from "./AreaProgressChart";

const AreaCharts = () => {
  return (
    <section className="content-area-charts">
      <AreaBarChart />
      <Calendar />
      {/* <AreaProgressChart /> */}
    </section>
  );
};

export default AreaCharts;
