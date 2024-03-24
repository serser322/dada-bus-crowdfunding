import { useState } from "react";
import { cloneDeep } from "lodash";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import Loader from "../ui/Loader";

import DirectionsBusRound from "@ricons/material/DirectionsBusRound";
import DirectionsBusFilled from "@ricons/material/DirectionsBusFilled";
import BusAlertFilled from "@ricons/material/BusAlertFilled";

function BusInfoButtons() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasBus, setHasBus] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [busInfo, setBusInfo] = useState({
    RouteName: "",
    direction: "",
    plateNumb: "",
    realTimeLink: "",
  });

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

  const closeModal = () => {
    setIsModalOpen(false);

    setBusInfo({
      ...busInfo,
      routeName: "",
      directionName: "",
      stopName: "",
      plateNumb: "",
      realTimeLink: "",
    });
  };

  const getDirectionName = (code) => {
    switch (code) {
      case 0:
        return "去程";
      case 1:
        return "返程";
      case 2:
        return "迴圈";
      default:
        return "未知";
    }
  };

  const getRealTimeMapLink = (city, plateNumb, routeId) => {
    switch (city) {
      case "Taipei":
        return `https://ebus.gov.taipei/BusTime/${plateNumb}`;
      case "Taichung":
        return `https://citybus.taichung.gov.tw/ebus/driving-map/${routeId}`;
      case "Kaohsiung":
        return `https://ibus.tbkc.gov.tw/ibus/driving-map/${routeId}`;
      default:
        return "";
    }
  };

  async function showBusInfoModal(city, plateNumb) {
    try {
      setIsModalOpen(true);
      setIsLoading(true);
      const res = await fetch(
        `https://tdx.transportdata.tw/api/basic/v2/Bus/RealTimeNearStop/City/${city}?%24filter=PlateNumb%20eq%20%27${plateNumb}%27&%24top=5&%24format=JSON`
      );
      const data = await res.json();
      setIsLoading(false);

      let realTimeData = {};

      if (!res.ok) {
        setHasBus(false);
        setErrorMessage("發生錯誤：" + data?.message ?? "不明錯誤。");
        return;
      } else if (data?.length === 0) {
        setHasBus(false);
        setErrorMessage("該車牌號之班車尚未發車。");
        return;
      } else {
        setHasBus(true);
        realTimeData = cloneDeep(data[0]);
      }

      const directionName = getDirectionName(realTimeData.Direction);
      const realTimeLink = getRealTimeMapLink(
        city,
        plateNumb,
        realTimeData.RouteID
      );

      setBusInfo({
        ...busInfo,
        routeName: realTimeData.RouteName.Zh_tw,
        directionName: directionName,
        stopName: realTimeData.StopName.Zh_tw,
        plateNumb: realTimeData.PlateNumb,
        realTimeLink: realTimeLink,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
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
      <Modal
        isOpen={isModalOpen}
        title="即時資訊"
        closeModal={closeModal}
        key="test"
      >
        {isLoading ? (
          <div className="flex justify-center">
            <Loader />
          </div>
        ) : (
          <div>
            {hasBus ? (
              <div className="grid grid-cols-2">
                <div>行駛路線：</div>
                <div>
                  <strong>{busInfo.routeName} 線路</strong>
                </div>
                <div>行駛方向：</div>
                <div>
                  <strong>{busInfo.directionName}</strong>
                </div>
                <div>最新停靠站：</div>
                <div>{busInfo.stopName}</div>
                <div>車牌號碼：</div>
                <div>
                  <strong>{busInfo.plateNumb}</strong>
                </div>
                <div>查看即時動態：</div>
                <div className="self-center">
                  <a
                    href={busInfo.realTimeLink}
                    className="flex content-center underline text-xl"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="w-5 self-center mr-2 sm:w-6">
                      <DirectionsBusFilled />
                    </div>
                    點此查看
                  </a>
                </div>
                <div className="col-span-2 leading-5 mt-2">
                  <small>(同路線常有多車行駛，請留意車牌號碼。)</small>
                </div>
              </div>
            ) : (
              <div className="flex justify-center">
                <div className="w-5 self-center mr-2 sm:w-6">
                  <BusAlertFilled />
                </div>
                {errorMessage}
              </div>
            )}
          </div>
        )}
      </Modal>
    </>
  );
}

export default BusInfoButtons;
