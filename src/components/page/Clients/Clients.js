import React from "react";
import "./styles.css";
import TextStyle from "../../shared/TextStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";

SwiperCore.use([Navigation]);

const clients = [
  { id: 1, img: "/images/client-1.png" },
  { id: 2, img: "/images/client-2.png" },
  { id: 3, img: "/images/client-3.png" },
];

function Clients() {
  return (
    <div className="clients-container">
      <div className="clients-content">
        <TextStyle
          text="عمـلاؤنـا"
          coloredIndices={[0]}
          style={{ color: " #0A0A0A" }}
        />
        <div className="slider-container">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              1240: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              900: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              400: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              250: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
            }}
            className="mySwiper"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {clients.map((client) => (
              <SwiperSlide
                key={client.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "10px",
                }}
              >
                <div className="client-card">
                  <img src={client.img} alt="client" className="client-image" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Clients;
