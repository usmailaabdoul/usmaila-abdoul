import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  .swiper {
    height: 250px;
    width: 80%;
    margin-left: initial;
    margin-right: initial;

    .swiper-pagination {
      bottom: 2px;

      .swiper-pagination-bullet {
        background: #fcfbfb;
        opacity: 1;
      }

      .swiper-pagination-bullet-active {
        background: #4653ed;
      }
    }
  }
  .projects {
    font-family: 'open sans';
    background: #cbb9ef;
    /* padding: 20px; */
    /* height: 250px;
    width: 80%; */
    border-radius: 40px;
    display: flex;
    flex-direction: column;

    .subtitle {
      padding: 15px 0px 15px 30px;
      color: #262626;
      font-size: 14px;
      font-weight: 700;
    }

    .title {
      padding: 0 30px;
      color: #262626;
      font-size: 40px;
      line-height: 1em;
      flex: 3;
    }

    .tools {
      flex: 1;
      padding: 30px;
      color: #262626;
      font-size: 20px;
    }
  }
`;

const SliderProject = () => {
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="projects">
            <div className="subtitle">Projects 1</div>
            <div className="title">Facial recorgnition project</div>
            <div className="tools">React, Node.JS, Express, JS</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="projects">
            <div className="subtitle">Projects 2</div>
            <div className="title">Facial recorgnition project</div>
            <div className="tools">React, Node.JS, Express, JS</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="projects">
            <div className="subtitle">Projects 3</div>
            <div className="title">Facial recorgnition project</div>
            <div className="tools">React, Node.JS, Express, JS</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="projects">
            <div className="subtitle">Projects 4</div>
            <div className="title">Facial recorgnition project</div>
            <div className="tools">React, Node.JS, Express, JS</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default SliderProject