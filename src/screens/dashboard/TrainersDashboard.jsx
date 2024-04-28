import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../../components";

const TrainersDashoboard = () => {
  return (
    <div className="content-area">
      <AreaTop name={"Trainers Dashboard"} />
      <AreaCards />
      <AreaCharts />
      <AreaTable />
    </div>
  );
};

export default TrainersDashoboard;
