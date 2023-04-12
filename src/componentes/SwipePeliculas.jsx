// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";


// import required modules
import { FreeMode, Navigation, Scrollbar, A11y } from 'swiper';

import useProyectoPeliculasProvider from "../hook/useProyectoPeliculasProvider"


const SwipePeliculas = ({ children }) => {
    const { peliculasDramas } = useProyectoPeliculasProvider()

    return (
        <>

            <Swiper
                slidesPerView={7}
                spaceBetween={5}
                freeMode={true}
                navigation={true}
                modules={[FreeMode, Navigation, Scrollbar, A11y,]}
            >
                {children}

            </Swiper>

        </>
    );
}

export default SwipePeliculas