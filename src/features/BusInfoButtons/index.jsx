import { useState } from "react";
import Button from "../../components/Button";
import BusInfoModal from "./components/BusInfoModal";
import "../../styles/BusInfoButtons.scss";

import DirectionsBusRound from "@ricons/material/DirectionsBusRound";
import DirectionsBusFilled from "@ricons/material/DirectionsBusFilled";

function BusInfoButtons() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [query, setQuery] = useState({});

  const buttons = [
    {
      text: "台北公車 267-U5",
      icon: DirectionsBusFilled,
      event: () => showBusInfoModal("Taipei", "267-U5"),
    },
    {
      text: "台北公車 447-U3",
      icon: DirectionsBusFilled,
      event: () => showBusInfoModal("Taipei", "447-U3"),
    },
    {
      text: "台中公車 783-U8",
      icon: DirectionsBusFilled,
      event: () => showBusInfoModal("Taichung", "783-U8"),
    },
    {
      text: "高雄公車 725-V2",
      icon: DirectionsBusFilled,
      event: () => showBusInfoModal("Kaohsiung", "725-V2"),
    },
  ];

  async function showBusInfoModal(city, plateNumb) {
    setIsModalOpen(true);
    setQuery({ city, plateNumb });
  }

  return (
    <>
      <h1 className="flex text-2xl font-bold">
        <div className="w-7 self-center mr-2">
          <DirectionsBusRound />
        </div>
        公車即時資訊
      </h1>
      <div className="w-full py-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {buttons.map((item) => (
          <Button
            text={item.text}
            icon={item.icon}
            onClick={item.event}
            key={item.text}
          />
        ))}
      </div>
      <p className="text-end text-sm text-gray-500 my-3">
        即時資料來源：
        <a
          href="https://tdx.transportdata.tw/"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          交通部 TDX運輸資料流通服務平臺
        </a>
      </p>
      <BusInfoModal
        isOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        query={query}
      />
    </>
  );
}

export default BusInfoButtons;
