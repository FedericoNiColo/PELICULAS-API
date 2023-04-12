// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
import useProyectoPeliculasProvider from "../hook/useProyectoPeliculasProvider"

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const SwipePopulares = ({children}) => {

    const { peliculasPopulares } = useProyectoPeliculasProvider()

    return (

      

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
                    spaceBetween={10}
                    grabCursor={true}
                    centeredSlides={false}
                    slidesPerView={4}
                    navigation={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    effect={"coverflow"}
                    coverflowEffect={{
                        rotate: 1,
                        stretch: 0,
                        depth: 5,
                        modifier: 5,
                        slideShadows: true,
                    }}

                >

                    {children}

                </Swiper>
            
    );
};

export default SwipePopulares