import styled from "styled-components";
import FooterLink from "../components/FooterLink";
import XIcon from "../../public/x_icon.svg";
import DocumentIcon from "../../public/edit-document-icon.svg";
import YoutubeIcon from "../../public/youtube-icon.svg";

const FooterDivider = styled.div`
  background-color: white;
  width: 90vw;
  height: 1px;
  @media (min-width: 1024px) {
    width: 95vw;
    width: 1.5px;
    height: 2rem;
  }
`;

const linkList = [
  {
    iconImg: XIcon,
    text: "幼妲三周年公車",
    link: "https://twitter.com/Yoda3year",
  },
  {
    iconImg: DocumentIcon,
    text: "兩千回饋表單",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeY2CMaUNRrr90Xc7KqgnQtw58SnMWPg9jzfZYtYt0iEIzQDw/viewform",
  },
  {
    iconImg: XIcon,
    text: "活動聯絡人-程帆",
    link: "https://twitter.com/chengfan0830",
  },
  {
    iconImg: YoutubeIcon,
    text: "ReLive_灰妲 DaDa",
    link: "https://www.youtube.com/@ReLiveDaDa",
  },
];

function Footer() {
  return (
    <footer className="grid grid-cols-1 justify-items-center py-3 text-white bg-[#3c3c3c] mt-5 lg:grid-cols-[minmax(300px,_1.7fr)_minmax(300px,_0.3fr)] lg:h-14 lg:py-0 lg:px-8 lg:justify-items-stretch xl:pl-16">
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-4 md:gap-x-8">
        {linkList.map((item) => (
          <FooterLink
            iconImg={XIcon}
            text={item.text}
            link={item.link}
            key={item.text}
          />
        ))}
        {/* <FooterLink
          iconImg={XIcon}
          text="幼妲三周年公車"
          link="https://twitter.com/Yoda3year"
        />

        <FooterLink
          iconImg={DocumentIcon}
          text="兩千回饋表單"
          link="https://docs.google.com/forms/d/e/1FAIpQLSeY2CMaUNRrr90Xc7KqgnQtw58SnMWPg9jzfZYtYt0iEIzQDw/viewform"
        />

        <FooterLink
          iconImg={XIcon}
          text="活動聯絡人-程帆"
          link="https://twitter.com/chengfan0830"
        />

        <FooterLink
          iconImg={YoutubeIcon}
          text="ReLive_灰妲 DaDa"
          link="https://www.youtube.com/@ReLiveDaDa"
        /> */}
      </div>
      <div className="grid grid-cols-1 justify-items-center lg:justify-self-end lg:flex lg:items-center">
        <FooterDivider className="mx-2 my-4 sm:my-3 lg:my-2 lg:mr-4" />
        <div className="grid grid-cols-2 justify-items-center w-60 text-xs sm:w-[565px] sm:grid-cols-4 sm:justify-items-start md:w-[660px] lg:w-auto lg:grid-cols-2 lg:gap-1 lg:gap-x-4">
          <p className="hidden sm:block sm:col-span-2 lg:hidden">
            Copyright © 2023-2024. All rights reserved.
          </p>
          <p className="md:ml-4 lg:ml-0">
            素材源{" "}
            <a
              href="https://drive.google.com/drive/folders/14wPKqoCLNCL6v_ktzme6oLXMUzEnQZk9"
              className="underline decoration-dotted hover:text-amber-300 active:text-amber-500"
            >
              灰妲二創素材
            </a>
          </p>
          <p className="md:ml-6 lg:ml-0">
            網頁作者{" "}
            <a
              href="https://github.com/serser322"
              className="underline decoration-dotted hover:text-amber-300 active:text-amber-500"
            >
              小魯蛇蛇
            </a>
          </p>
          <p className="col-span-2 sm:hidden lg:block lg:col-span-2">
            Copyright © 2023-2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
