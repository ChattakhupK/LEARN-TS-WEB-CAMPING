"use client";
import { LandmarkCardProps } from "@/utils/types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import OtherInfo from "./OtherInfo";

const Hero = ({ Landmarks }: { landmarks: LandmarkCardProps[] }) => {
  return (
    <Swiper
      autoplay={{ delay: 2500 }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Navigation, Autoplay, Pagination]}
      className="mySwiper"
    >
      {Landmarks.map((Landmark) => {
        return (
          <SwiperSlide key={Landmark.image} className="group">
            <div>
              <div className="relative rounded-md overflow-hidden brig">
                <img
                  src={Landmark.image}
                  className="w-full h-[600px] object-cover brightness-75 group-hover:brightness-50 transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 z-50">
                  <div className="col-span-4 mb-4 flex h-full flex-1 justify-end md:mb-4 md:justify-end md:px-10">
                    <OtherInfo Landmark={Landmark} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default Hero;
