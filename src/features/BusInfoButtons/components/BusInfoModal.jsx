import { useState, useEffect } from "react";
import { cloneDeep } from "lodash";
import Modal from "../../../components/Modal";
import Loader from "../../../components/Loader";

import DirectionsBusRound from "@ricons/material/DirectionsBusRound";
import BusAlertFilled from "@ricons/material/BusAlertFilled";

const nowTimestamp = new Date().getTime();
let apiOptions = {};

function BusInfoModal({ isOpen, setIsModalOpen, query }) {
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

  // Fetch realtime data of bus
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://tdx.transportdata.tw/api/basic/v2/Bus/RealTimeNearStop/City/${query.city}?%24filter=PlateNumb%20eq%20%27${query.plateNumb}%27&%24top=5&%24format=JSON`,
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
          city: query.city,
          routeId: realTimeData.RouteID,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (isOpen) {
      fetchData();
    }
  }, [isOpen, query, busInfo]);

  // Fetch and set token
  useEffect(() => {
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

  const getTaipeiBusLink = async (routeId) => {
    const res = await fetch(
      `https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/Taipei?%24filter=RouteID%20eq%20%27${routeId}%27&%24top=30&%24format=JSON`,
      apiOptions
    );
    const data = await res.json();
    const TPERouteId = data[0].RouteMapImageUrl.split("nid=")[1];
    return `https://ebus.gov.taipei/Route/StopsOfRoute?routeid=${TPERouteId}`;
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

  const closeModal = () => {
    setIsModalOpen(false);
    setIsLoading(false);
  };

  return (
    <Modal isOpen={isOpen} title="即時資訊" closeModal={closeModal} key="test">
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
                <button
                  className="real-time-button"
                  onClick={() => toRealTime(busInfo.city, busInfo.routeId)}
                >
                  <div className="w-5 mr-2 ml-1 pt-px">
                    <DirectionsBusRound />
                  </div>
                  <span className="tracking-[0.2rem]">即時動態</span>
                </button>
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
  );
}

export default BusInfoModal;
