'use client';

import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface FullPageSliderProps {
  children: ReactNode[];
}

export function FullPageSlider({ children }: FullPageSliderProps) {
  return (
    <>
      <style jsx global>{`
        .swiper {
          width: 100%;
          height: 100vh;
        }

        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .swiper-pagination {
          right: 20px !important;
          left: auto !important;
          width: auto !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 12px !important;
        }

        .swiper-pagination-bullet {
          width: 8px !important;
          height: 8px !important;
          background: rgba(255, 255, 255, 0.3) !important;
          opacity: 1 !important;
          margin: 0 !important;
          border-radius: 0 !important;
          transition: all 0.3s ease !important;
        }

        .swiper-pagination-bullet-active {
          background: var(--zp-fuchsia) !important;
          height: 24px !important;
          box-shadow: 0 0 10px var(--zp-fuchsia);
        }
      `}</style>

      <Swiper
        direction="vertical"
        slidesPerView={1}
        speed={800}
        mousewheel={{
          releaseOnEdges: true,
        }}
        pagination={{
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        modules={[Mousewheel, Pagination, Keyboard]}
        className="fullpage-swiper"
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
