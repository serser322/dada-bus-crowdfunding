import "../../styles/ProgressBarGroup.scss";
import LockFilled from "@ricons/material/LockFilled";
import BusIcon from "../../../public/bus_icon.svg";
import CheckCircleRound from "@ricons/material/CheckCircleRound";

const finishedPhases = [
  {
    title: "第一",
    name: "基礎募資",
    amount: "36,000",
    amountNum: 36000,
  },
  {
    title: "第二",
    name: "台北站",
    amount: "18,000",
    amountNum: 18000,
  },
  {
    title: "第三",
    name: "台中站",
    amount: "18,000",
    amountNum: 18000,
  },
  {
    title: "第四",
    name: "高雄站",
    amount: "18,000",
    amountNum: 18000,
  },
];
const lockedPhases = [
  // {
  //   title: "第四",
  //   name: "高雄站",
  //   amount: "18,000",
  // }
];

function ProgressBarGroup() {
  return (
    <>
      {finishedPhases.map((item) => (
        <div
          className="finished-item w-full relative mb-3 rounded-lg"
          key={item.title}
        >
          <img className="bus-icon" src={BusIcon} alt="" />
          <div className="text-xs font-semibold text-end mb-1">
            <span className="mr-2">(已解鎖)</span>
          </div>
          <div className="bar w-full text-green-500">
            <div className="check_icon">
              <CheckCircleRound />
            </div>
          </div>
          <div className="text-xs font-semibold mt-1.5 ml-3">
            <span className="mr-2">{item.title}階段募資</span>
            <span className="mr-2">{item.name}</span>
            <span className="mr-6">NT${item.amount}</span>
          </div>
        </div>
      ))}

      {lockedPhases.map((item) => (
        <div
          className="locked-phases w-full relative rounded-lg"
          key={item.title}
        >
          <img className="bus-icon" src={BusIcon} alt="" />
          <div className="text-xs font-semibold text-end mb-1">
            <span className="mr-2">(待解鎖)</span>
          </div>
          <div className="bar w-full text-gray-500">
            <div className="lock_icon">
              <LockFilled />
            </div>
          </div>
          <div className="text-xs font-semibold mt-1.5 ml-3">
            <span className="mr-2">{item.title}階段募資</span>
            <span className="mr-2">{item.name}</span>
            <span className="mr-6">NT${item.amount}</span>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProgressBarGroup;
