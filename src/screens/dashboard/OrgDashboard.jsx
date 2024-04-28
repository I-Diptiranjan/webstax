import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../../components";


const OrgDashoboard = () => {
  return (
    <div className="content-area">
      <AreaTop name={"Organisation Dashboard"} />
      <AreaCards />
      <AreaCharts />
      <AreaTable />
    </div>
  );
};

export default OrgDashoboard;
