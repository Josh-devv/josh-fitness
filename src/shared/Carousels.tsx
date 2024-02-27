import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Props = {
  children: any;
}

const Carousels = ({children}: Props) => {
  return (
    <Carousel

    additionalTransfrom={0}
    arrows
    autoPlay={false}
    autoPlaySpeed={2000}
    centerMode={false}
    className="z-10"
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
{children}
    </Carousel>
      
  )
}

export default Carousels