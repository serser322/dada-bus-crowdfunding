import { useState } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import LiveHelpRound from "@ricons/material/LiveHelpRound";
import TipsAndUpdatesRound from "@ricons/material/TipsAndUpdatesRound";
import ShoppingBagFilled from "@ricons/material/ShoppingBagFilled";

function IntroBtnGroup() {
  const [isIntroModalOpen, setIsIntroModalOpen] = useState(false);
  const [isAccountInfoModalOpen, setIsAccountInfoModalOpen] = useState(false);
  const [isRewardModalOpen, setIsRewardModalOpen] = useState(false);

  const toggleIntroModal = () => setIsIntroModalOpen((newValue) => !newValue);
  const toggleAccountInfoModal = () =>
    setIsAccountInfoModalOpen((newValue) => !newValue);
  const toggleRewardModal = () => setIsRewardModalOpen((newValue) => !newValue);

  const buttons = [
    {
      text: "活動簡介",
      icon: TipsAndUpdatesRound,
      event: toggleIntroModal,
    },
    {
      text: "募資方式",
      icon: LiveHelpRound,
      event: toggleAccountInfoModal,
    },
    {
      text: "募資回饋",
      icon: ShoppingBagFilled,
      event: toggleRewardModal,
    },
  ];

  return (
    <>
      {buttons.map((item) => (
        <Button
          text={item.text}
          icon={item.icon}
          onClick={item.event}
          key={item.text}
        />
      ))}

      <Modal
        isOpen={isIntroModalOpen}
        title="活動簡介"
        closeModal={toggleIntroModal}
        key="introModal"
      >
        我們將計劃2024/3/20-4/20，在台灣多處(雙北、台中、高雄)以募資解鎖方式散播雞腿幫教義，慶祝灰妲出道三周年。
      </Modal>
      <Modal
        isOpen={isAccountInfoModalOpen}
        title="募資方式"
        closeModal={toggleAccountInfoModal}
        key="accountInfoModal"
      >
        <div>匯款至 Line Bank 銀行帳戶</div>
        <div>
          銀行：<strong>824 連線商業銀行</strong>
        </div>
        <div>
          帳號：<strong>111014714985</strong>
        </div>
        <div>時間：即日起至2024/1/31</div>
      </Modal>
      <Modal
        isOpen={isRewardModalOpen}
        title="募資回饋"
        closeModal={toggleRewardModal}
        key="rewardModal"
      >
        <div>
          單次匯款滿五百以上，可憑匯款證明在場次(如FF/CWT...)，向(帆/楠)索取明信片一張，同一帳號匯款累積兩千以上，填寫
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeY2CMaUNRrr90Xc7KqgnQtw58SnMWPg9jzfZYtYt0iEIzQDw/viewform"
            target="_blank"
            className="underline hover:text-amber-300 active:text-amber-500"
            rel="noreferrer"
          >
            回饋表單
          </a>
          贈送搖搖立牌。
        </div>
      </Modal>
    </>
  );
}

export default IntroBtnGroup;
