import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import useProyectoPeliculasProvider from "../hook/useProyectoPeliculasProvider"
import { Swiper, SwiperSlide } from "swiper/react";
import SwipePeliculas from "./SwipePeliculas";
import { handlePorcentaje } from '../helpers/index'

const PeliculasPopularesInfantiles = () => {

    const { peliculasPopularesInfantiles, modificarModalPelicula, handleModalPelicula } = useProyectoPeliculasProvider()

    return (
        <section className=" mt-2 p-2 lg:p-10 text-lg md:text-2xl xl:text-4xl">
            <div>
                <div>

                    <h2 className="text-white mb-2 md:mb-5">Peliculas Populares Infantiles</h2>
                </div>

                <SwipePeliculas>

                    {
                        peliculasPopularesInfantiles.map(peli => (

                            <SwiperSlide key={peli.id}>

                                <div className='w-full hover:opacity-90'>
                                    <img
                                        src={`${import.meta.env.VITE_IMAGEN_URL}${peli.poster_path}`}
                                        alt={`${peli.title}`}
                                        className="w-full h-20 hover:h-24 md:h-40 md:hover:h-44 lg:h-60 lg:hover:h-64 2xl:h-80 2xl:hover:h-96 transition-all duration-1000 delay-300 ease-in-out"
                                    />
                                    
                                    <div className=' h-3 w-3 lg:h-10 lg:w-10 absolute top-1 lg:top-3 left-1 lg:left-2'>
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


                                    </div>

                                    <div className='flex flex-col justify-center items-center absolute top-1 lg:top-3 right-1 lg:right-2 text-sm bg-black/60 rounded-full hover:bg-gray-900 '>
                                        <div className="text-white  md:m-1 h-3 w-3 md:h-5 md:w-5 lg:h-8 lg:w-8  hover:text-gray-300 cursor-pointer">                                            <p
                                            onClick={() => {
                                                modificarModalPelicula()
                                                handleModalPelicula(`${peli.id}`)
                                            }}
                                        > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                            </svg>
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </SwipePeliculas>

            </div>
        </section>
    )
}

export default PeliculasPopularesInfantiles
