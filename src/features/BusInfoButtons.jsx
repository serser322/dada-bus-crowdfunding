import { useState, useEffect } from "react";
import { cloneDeep } from "lodash";
import styled from "styled-components";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import Loader from "../ui/Loader";

import DirectionsBusRound from "@ricons/material/DirectionsBusRound";
import DirectionsBusFilled from "@ricons/material/DirectionsBusFilled";
import BusAlertFilled from "@ricons/material/BusAlertFilled";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  background-color: var(--yellow-1);
  border-radius: 10px;
  width: 120px;
  height: 35px;
  box-shadow: 1px 3px 4px 1px rgba(0, 0, 0, 0.25);

  &:hover {
    background-color: var(--pink-2);
  }

  &:active {
    background-color: var(--pink-3);
  }
`;

let apiOptions = {};

function BusInfoButtons() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasBus, setHasBus] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [busInfo, setBusInfo] = useState({
    routeName: "",
    directionName: "",
    stopName: "",
    plateNumb: "",
    city: "",
    routeId: "",
  });

  useEffect(() => {
    const nowTimestamp = new Date().getTime();
    const fetchToken = async () => {
      try {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            grant_type: "client_credentials",
            client_id: "www322.joe-8ee038b7-0a01-4373",
            client_secret: "b3c2584a-1f36-472d-855a-ac64162cce5c",
          }),
        };
        const response = await fetch(
          "https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token",
          options
        );
        const data = await response.json();
        localStorage.setItem("tdx_token", data.access_token);
        localStorage.setItem(
          "token_expiration_time",
          nowTimestamp + 43200000 // 12小時
        );
      } catch (error) {
        console.error(error);
      }
    };

    const setToken = async () => {
      if (
        !localStorage.getItem("tdx_token") ||
        nowTimestamp > localStorage.getItem("token_expiration_time")
      ) {
        await fetchToken();
      }

      apiOptions = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("tdx_token")}`,
        },
      };
    };

    setToken();
  }, []);

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
      city: "",
      routeId: "",
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

  const getTaipeiBusLink = async (routeId) => {
    const res = await fetch(
      `https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/Taipei?%24filter=RouteID%20eq%20%27${routeId}%27&%24top=30&%24format=JSON`,
      apiOptions
    );
    const data = await res.json();
    const TPERouteId = data[0].RouteMapImageUrl.split("nid=")[1];
    return `https://ebus.gov.taipei/Route/StopsOfRoute?routeid=${TPERouteId}`;
  };

  async function showBusInfoModal(city, plateNumb) {
    try {
      setIsModalOpen(true);
      setIsLoading(true);
      const res = await fetch(
        `https://tdx.transportdata.tw/api/basic/v2/Bus/RealTimeNearStop/City/${city}?%24filter=PlateNumb%20eq%20%27${plateNumb}%27&%24top=5&%24format=JSON`,
        apiOptions
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

      setBusInfo({
        ...busInfo,
        routeName: realTimeData.RouteName.Zh_tw,
        directionName: directionName,
        stopName: realTimeData.StopName.Zh_tw,
        plateNumb: realTimeData.PlateNumb,
        city,
        routeId: realTimeData.RouteID,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const toRealTime = async (city, routeId) => {
    let realTimeLink = "";

    switch (city) {
      case "Taipei":
        realTimeLink = await getTaipeiBusLink(routeId);
        break;
      case "Taichung":
        realTimeLink = `https://citybus.taichung.gov.tw/ebus/driving-map/${routeId}`;
        break;
      case "Kaohsiung":
        realTimeLink = `https://ibus.tbkc.gov.tw/ibus/driving-map/${routeId}`;
        break;
      default:
        realTimeLink = "";
    }

    window.open(realTimeLink, "_blank");
  };

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
              <div className="grid grid-cols-2 sm:grid-cols-[0.9fr_1.1fr]">
                <div>行駛路線：</div>
                <div>
                  <strong>{busInfo.routeName} 路線</strong>
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
                  <StyledButton
                    onClick={() => toRealTime(busInfo.city, busInfo.routeId)}
                  >
                    <div className="w-5 mr-2 ml-1 pt-px">
                      <DirectionsBusRound />
                    </div>
                    <span className="tracking-[0.2rem]">即時動態</span>
                  </StyledButton>
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
