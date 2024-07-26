import "../../styles/FundraisingResults.scss";
import CountUp from "react-countup";
import BusIcon from "../../../public/bus_icon.svg";
import CheckCircleRound from "@ricons/material/CheckCircleRound";

function FundraisingResults() {
  const finished = [
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

  return (
    <>
      {finished.map((item) => (
        <div className="w-full relative mb-3 rounded-lg" key={item.title}>
          <div className="bar-container w-full relative mb-3 rounded-lg">
            <img src={BusIcon} alt="" />
            <div className="flex justify-between mt-5 mb-1">
              <div className="text-xs pt-0.5 font-semibold ml-14 sm:ml-16 sm:pt-0 sm:text-sm ">
                <span className="mr-2">{item.title}階段</span>
                <span className="mr-2">{item.name}</span>
                <span className="mr-6">
                  NT$
                  <CountUp
                    start={0}
                    end={item.amountNum}
                    duration={3}
                    delay={0.7}
                  />
                </span>
              </div>
              <div className="text-sm font-semibold text-end">
                <span className="mr-2">
                  <CountUp
                    start={0}
                    end={100}
                    decimals={1}
                    duration={3}
                    delay={0.7}
                  />
                  %
                </span>
              </div>
            </div>
            <div>
              <div className="bar w-full text-green-500" />
              <div className="check-icon">
                <CheckCircleRound />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default FundraisingResults;
