import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const sections = [
  {
    id: "illustration",
    images: [
      "/images/ya2.png",
      "/images/聖誕節.gif",
      "/images/ya.gif",
    ],
    intro: {
      icon: "🎨",
      title: "Illustration",
      description: "插畫是一種結合創意、敘事與美感的視覺表達方式。透過線條、構圖與色彩，將情感與故事具象化，建立與觀者之間的情感連結。我在插畫創作中特別注重角色設計與氛圍營造，無論是兒童繪本、品牌角色還是社群貼圖，都希望傳遞一種溫度與個性。每張圖背後，都是一段關於生活觀察與心境投射的探索歷程。在風格上，我傾向於乾淨清晰的筆觸與富含情緒的配色，讓每個畫面都能單獨講一個故事，也能組合成完整的視覺敘事。插畫對我來說，不僅是視覺設計的一部分，更是情感與創意的出口。",
      image: "public/images/i4.png",
    },
    cards: [
      {
        title: "設計概念",
        description: "如果我有一對翅膀。",
        image: "https://liamhaung.github.io/my-portfolio/images/i5.png",
      },
      {
        title: "設計概念",
        description: "원초 그걸 찾아。",
        image: "images/i8.png",
      },
      {
        title: "設計概念",
        description: "휩쓸린 에너지 Its so special",
        image: "images/i7.png",
      },
    ],
  }  ,
  {
    id: "graphic",
    images: [
      "/images/大研mock-up.png",
      "public/images/d6.png",
      "public/images/d1.png",
    ],
    intro: {
      icon: "🖼️",
      title: "Design",
      description: "設計是一門整合視覺邏輯與功能需求的藝術。在平面設計領域中，我致力於將資訊視覺化，讓訊息不僅易於理解，更具吸引力。從品牌識別、海報設計到社群素材，每一次創作都從目標受眾與核心概念出發，追求簡潔有力的傳達效果。我喜歡透過網格系統與圖像語言建立視覺層次，並選擇合適的色彩與字型，營造一致性的品牌形象。設計過程中，我會依據專案需求靈活調整風格與節奏，並持續關注使用者體驗與當代視覺趨勢。好的設計應該能在第一眼吸引目光，也在最後留下印象。",
      image: "public/images/d6.png",
    },
    cards: [
      {
        title: "靈感來源",
        description: "휩쓸린 에너지 Its so special。",
        image: "public/images/d7.png",
      },
      {
        title: "設計概念",
        description: "서로의 존재를 느껴",
        image: "public/images/d3.png",
      },
      {
        title: "設計概念",
        description: "서로의 존재를 느껴",
        image: "public/images/d8.png",
      },
    ],
  },
  {
    id: "exhibition",
    images: [
      "public/images/e1.jpg",
      "public/images/e2.jpg",
      "public/images/e3.jpg",
    ],
    intro: {
      icon: "🏛️",
      title: "Exhibition(為王一設計在職期間作品)",
      description: "展場設計融合空間規劃、視覺設計與觀眾動線管理，是一種多感官的敘事體驗。我在展場專案中，重視「沉浸感」與「互動性」，希望觀眾不只是觀看，而是參與其中。從主視覺延伸到導覽標示、牆面排版與裝置設計，每一處細節都經過縝密考量，確保視覺風格一致且易於辨識。針對不同主題展覽，我會依據內容特性選擇適合的材料與結構方式，創造出有記憶點的空間氛圍。展場是一種動態媒介，它結合藝術、設計與故事敘述，是我最享受的跨領域創作之一。",
      image: "public/images/e4.jpg",
    },
    cards: [
      {
        title: "設計概念",
        description: "서로의 존재를 느껴",
        image: "public/images/e5.jpg",
      },
      {
        title: "設計概念",
        description: "Its about to bang bang",
        image: "public/images/e6.jpg",
      },
      {
        title: "設計概念",
        description: "Supernova",
        image: "public/images/e7.jpg",
      },
    ],
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [countdown, setCountdown] = useState(3);
  const [fadeOut, setFadeOut] = useState(false);
  const [readyToEnter, setReadyToEnter] = useState(false);
  const [showFullImage, setShowFullImage] = useState(true);
  const [showEnterButton, setShowEnterButton] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          setReadyToEnter(true);
          setShowEnterButton(true);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    setFadeOut(true);
    setTimeout(() => setShowLoader(false), 2000);
  };

  if (showLoader) {
    return (
      <div
        className={`fixed inset-0 flex flex-col items-center justify-center z-50 transition-opacity duration-1000 bg-black ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        {showFullImage && (
          <div className="absolute inset-0 z-0">
            <img
              src="/images/0604 3.gif"
              alt="Intro Visual"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 backdrop-blur-md bg-black/5" />
          </div>
        )}
        <div className="relative z-10 text-center">
          <h1 className="text-xl font-extrabold mb-4 text-black drop-shadow-lg">
            Liam Studio1
          </h1>
          <p className="text-4xl font-extrabold text-black drop-shadow-lg">即將進入作品集</p>

          {!readyToEnter ? (
            <div className="text-6xl font-extrabold mt-4 text-black animate-ping-slow py-6">
              {countdown}
            </div>
          ) : showEnterButton ? (
            <button
              onClick={handleEnter}
              className="mt-6 px-6 py-3 bg-white text-black rounded-full text-lg font-medium hover:bg-gray-200 transition-opacity duration-1000 animate-fade-in"
            >
              進入作品集
            </button>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div>
       <div className="app-container">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50 opacity-80 px-6 py-4">
  <div className="flex items-center justify-between max-w-screen-xl mx-auto">
    <div className="text-xl font-extrabold text-black">Liam Studio</div>

    <div className="md:hidden">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-gray-700 focus:outline-none"
      >
        ☰
      </button>
    </div>

    <div
      className={`flex-col md:flex md:flex-row gap-6 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent px-6 md:px-0 py-4 md:py-0 shadow-md md:shadow-none transition-all duration-300 ${
        menuOpen ? "flex" : "hidden"
      } md:ml-auto`}
    >
      <a href="#illustration" className="text-gray-700 font-extrabold hover:text-black transition">
     Illustraion
      </a>
      <a href="#graphic" className="text-gray-700 font-extrabold hover:text-black transition">
        Desgin
      </a>
      <a href="#exhibition" className="text-gray-700 font-extrabold hover:text-black transition">
        Exhibtion
      </a>
    </div>
  </div>
</nav>

      {/* Header GIF */}
      <div className="w-full rounded-2xl ">
        <img
           src={`${window.location.origin}/images/101-t3.gif`}
          alt="Header GIF"
          className="w-full object-contain py-6"
        />
      </div>
      <div className="w-full h-60 flex items-center justify-center text-white text-6xl font-extrabold">
  ACTION！
</div>
      {/* Sections */}
     

      <div className="flex flex-col gap-10 px-6">
        {sections.map((section) => (
          <div key={section.id} id={section.id} className="flex flex-col gap-6">
            {/* Carousel */}
            <div className="w-full max-w-screen-lg mx-auto">
            <div className="rounded-2xl shadow-md overflow-hidden" data-aos="fade-up">
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={3000}
                dynamicHeight={true}
                emulateTouch={true}
              >
                {section.images.map((img, index) => (
                  <div key={index} className="flex items-center justify-center bg-black">
                    <img
                      src={img.replace("public/", "/")}
                      alt={`${section.id}-${index}`}
                      className="max-h-[600px] w-auto object-contain"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            

{/* Intro 區塊 */}
<div className="flex flex-col md:flex-row gap-12 items-center mt-20 mb-20  text-white" data-aos="fade-up">
  <div className="md:w-7/10 w-full">
    <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
      <span className="text-3xl">{section.intro.icon}</span>
      {section.intro.title}
    </h2>
    <p className="text-gray-400 leading-relaxed">{section.intro.description}</p>
  </div>
  <div className="md:w-3/10 w-full">
    <img
      src={section.intro.image}
      alt={section.intro.title}
      className="rounded-xl shadow-md object-cover w-full h-full"
    />
  </div>
</div>


            {/* RWD Cards */}
            <div className="md:hidden mt-6">
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={16}
                slidesPerView={0}
                className=" mx-auto"
              >
                {section.cards.map((card, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="flex flex-col rounded-2xl shadow-md bg-white overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className=" mx-auto object-contain  bg-OD1F2D"
                      />
                      <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                        <p className="text-sm text-gray-600">{card.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Desktop Cards (左右排列) */}
            <div className="hidden md:flex flex-row gap-6 mt-6">
              {section.cards.map((card, idx) => (
                <div key={idx} className="flex-1 rounded-2xl shadow-md bg-white overflow-hidden">
                  <img
                    src={card.image.replace("/", "/")}
                    alt={card.title}
                    className="w-full object-contain max-h-60 bg-gray-100"
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-600">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full h-20 mt-8 font-extrabold text-white "></div>


{/* 分隔線 */}
</div>

          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
