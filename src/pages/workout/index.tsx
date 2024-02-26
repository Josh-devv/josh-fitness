import Workout from "@/Components/workout"
import Navbar from "@/navbar"
import { users } from "@/shared/data"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import slid from "@/assets/slid.png"
import slid1 from "@/assets/slid1.png"
import slid2 from "@/assets/slid2.png"
import slid3 from "@/assets/slid3.png"
import slid4 from "@/assets/slid4.png"


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules"

const WorkoutPage = () => {

    const [top, setTop] = useState<boolean>(true)

    useEffect(()=> {
      const handleScroll = () => {
        if(window.scrollY !== 0) setTop(false)
      }
      window.addEventListener("scroll", handleScroll)
      return ()=> window.removeEventListener("scroll", handleScroll)
    })

  
  return (
    <>
        <Navbar top={top}/>
        <div className="pt-10 ">
            <Workout users={users}/>
        </div>

        <section id="" className="w-[100%] pt-20 max-sm:pt-10 py-8 flex flex-col justify-center items-center font-dmsans text-white  bg-black ">
            <div className="text-[25px] w-[90%] flex justify-center flex-col font-medium max-sm:text-[15px]">
                <p className="w-[90%] self-start text-[40px] max-sm:text-[20px] font-bold pb-6 max-xxsm:text-[20px]">Beginner Friendly</p>
                <p className="font-normal w-[70%] max-lg:w-[90%] max-sm:w-[95%] pb-5 text-[15px]">
                Looking to get started on your fitness journey? Try one of these beginner-friendly programs!
                These have shorter time commitments or have low-impact alternatives.     
                </p>
                <button className="w-[15%] max-sm:text-[13px] max-sm:w-[50%] max-lg:w-[30%] font-normal rounded-md py-1 bg-white text-black text-[17px] border">1093+ People Tried</button>
            </div>

            <div className=" pt-12 container ">
            
            <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay={false}
      autoPlaySpeed={2000}
      centerMode={false}
      className="c"
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass="carousel"
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1280,
          },
          items: 5,
          partialVisibilityGutter: 40,
        },
        desk: {
          breakpoint: {
            max: 1440,
            min: 1024,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 1024,
            min: 769,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 900,
            min: 767,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
        small: {
          breakpoint: {
            max: 769,
            min: 500,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
        xxsmall: {
          breakpoint: {
            max: 500,
            min: 350,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tiny: {
          breakpoint: {
            max: 350,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
        
       <div className=" flex justify-center">
       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
          <img src={slid} alt="slide_image" className=" max-sm:w-[95%] max-lg:w-[410px] w-[300px] max-md:w-[300px] rounded-3xl" />
          <button className="absolute top-[90%] z-10 bg-white text-black px-4 rounded-md">20-40 mins </button>
        </div>
       <div className="flex justify-center">
       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
          <img src={slid1} alt="slide_image" className="max-sm:w-[95%] max-lg:w-[410px] w-[300px] max-md:w-[300px] rounded-3xl"  />

<button className="absolute top-[90%] z-10 bg-white text-black px-4 rounded-md">20-40 mins </button>        </div>
       <div className="flex justify-center">
       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
          <img src={slid2} alt="slide_image"  className="max-sm:w-[95%] max-lg:w-[410px] w-[300px] max-md:w-[300px] rounded-3xl"  />
          <button className="absolute top-[90%] z-10 bg-white text-black px-4 rounded-md">20-40 mins </button>
        </div>
       <div className="flex justify-center">
       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
          <img src={slid3} alt="slide_image"  className="max-sm:w-[90%] max-lg:w-[410px] w-[300px] max-md:w-[300px] rounded-3xl"  />
          <button className="absolute top-[90%] z-10 bg-white text-black px-4 rounded-md">20-40 mins </button>
        </div>
       <div className="flex justify-center">
       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
          <img src={slid4} alt="slide_image"  className="max-sm:w-[90%] max-lg:w-[410px] w-[300px] max-md:w-[300px] rounded-3xl"  />
          <button className="absolute top-[90%] z-10 bg-white text-black px-4 rounded-md">20-40 mins </button>
        </div>
       <div className="flex justify-center">
       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
          <img src={slid2} alt="slide_image"  className="max-sm:w-[90%] max-lg:w-[410px] w-[300px] max-md:w-[300px] rounded-3xl"  />
          <button className="absolute top-[90%] z-10 bg-white text-black px-4 rounded-md">20-40 mins </button>
        </div>
       <div className="flex justify-center">
       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
          <img src={slid3} alt="slide_image"  className="max-sm:w-[90%] max-lg:w-[410px] w-[300px] max-md:w-[300px] rounded-3xl"  />
          <button className="absolute top-[90%] z-10 bg-white text-black px-4 rounded-md">20-40 mins </button>
        </div>
{/*
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
    </div> */}
      </Carousel>
            </div>
            
        </section>
        
    </>
  )
}

export default WorkoutPage