import DirectionsBusRound from "@ricons/material/DirectionsBusRound";
import Card from "../../ui/Card";

function ActivityInfo() {
  return (
    <Card>
      <h1 className="flex text-base font-bold col-span-2 sm:text-2xl">
        <div className="w-5 self-center">
          <DirectionsBusRound />
        </div>
        【公車上路啦】歡慶灰妲三周年
        <span className="text-base sm:text-xl">🎉</span>
      </h1>
      <div className="col-span-2 sm:text-lg">
        <p>
          即日起至2024/4/18，在北車、天母、台中臺灣大道、高雄車站駁二都有機會看到妲妲的公車哦~
        </p>
        <p>
          只要在路上拍到妲妲三周年公車的照片，2024/4/20以前發推文並 #DA_bus2024
          ，就有機會獲得自製周邊！
        </p>
      </div>
    </Card>
  );
}

export default ActivityInfo;
