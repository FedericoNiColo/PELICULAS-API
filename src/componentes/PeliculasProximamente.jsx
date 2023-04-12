// Import Swiper React components
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { SwiperSlide } from 'swiper/react';

import useProyectoPeliculasProvider from "../hook/useProyectoPeliculasProvider"
import SwipePopulares from './SwipePopulares';
import { handlePorcentaje } from '../helpers/index'


const PeliculasProximamente = () => {

    const { peliculasProximamente, handleTrailers, modificarModalTrailers, modificarModalPelicula, handleModalPelicula } = useProyectoPeliculasProvider()

    return (

        <section className="md:mt-10 mt-5 p-2 lg:p-10 text-lg md:text-2xl xl:text-4xl ">
            <div>
                <div>

                    <h2 className="text-white mb-2 md:mb-5">Proximamente</h2>
                </div>

                <SwipePopulares>
                    {
                        peliculasProximamente.map(peli => (

                            <SwiperSlide key={peli.id}>
                                <div className='hover:opacity-90'>
                                    <img
                                        src={`${import.meta.env.VITE_IMAGEN_URL}${peli.poster_path}`}
                                        alt={`${peli.title}`}
                                        className=""
                                    />
                                    <div className='absolute top-2 left-2 lg:left-6 2xl:left-12 2xl:top-4 w-5 h-5 lg:h-10 lg:w-10 2xl:h-14 2xl:w-14'>

                                        {
                                            handlePorcentaje(peli.vote_average) > 70 ? (

                                                <CircularProgressbar
                                                    value={handlePorcentaje(`${peli.vote_average}`)}
                                                    text={`${handlePorcentaje(peli.vote_average)}%`}
                                                    background={true}
                                                    styles={buildStyles({
                                                        pathColor: '#08fa18',
                                                        textColor: '#ffffff',
                                                        trailColor: '#ffffff',
                                                        backgroundColor: 'rgb(17 24 39 /1',
                                                        textSize: '30px'
                                                    })}
                                                />
                                            ) : (
                                                <CircularProgressbar
                                                    value={handlePorcentaje(`${peli.vote_average}`)}
                                                    text={`${handlePorcentaje(peli.vote_average)}%`}
                                                    background={true}
                                                    styles={buildStyles({
                                                        pathColor: '#08fa18',
                                                        textColor: '#ffffff',
                                                        trailColor: '#ffffff',
                                                        backgroundColor: 'rgb(17 24 39 /1',
                                                        textSize: '30px'
                                                    })}
                                                />
                                            )
                                        }

                                        <button
                                            type='button'
                                            onClick={() => {
                                                modificarModalTrailers()
                                                handleTrailers(`${peli.id}`)
                                            }}
                                            className="text-red-600 w-5 h-5 lg:h-10 lg:w-10 2xl:h-14 2xl:w-14 mt-1 lg:mt-5 hover:text-red-400"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                            </svg>

                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </SwipePopulares>
            </div>
        </section>
    );
};

export default PeliculasProximamente

/* absolute md:top-2 top-1 md:left-2 left-1 */