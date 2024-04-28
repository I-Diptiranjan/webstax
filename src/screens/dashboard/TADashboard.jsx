import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../../components";

const TADashoboard = () => {
  return (
    <div className="content-area">
      <AreaTop name={"Agency Dashboard"} />
      <AreaCards />
      <AreaCharts />
      <AreaTable />
    </div>
  );
};

export default TADashoboard;
