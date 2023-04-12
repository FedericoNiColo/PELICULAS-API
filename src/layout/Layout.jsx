import React from 'react'
import Headers from '../componentes/Headers'
import ModalPeliculas from '../componentes/ModalPeliculas'
import ModalTrailers from '../componentes/ModalTrailers'
import PeliculasDramas from '../componentes/PeliculasDramas'
import PeliculasPopularesInfantiles from '../componentes/PeliculasInfantiles'
import PeliculasPopulares from '../componentes/PeliculasPopulares'
import PeliculasProximamente from '../componentes/PeliculasProximamente'
import PeliculasTomCruise from '../componentes/PeliculasTomCruise'
import SwipeReproductor from '../componentes/SwipeReproductor'
import useProyectoPeliculasProvider from "../hook/useProyectoPeliculasProvider"
import PeliculasBuscadas from '../componentes/PeliculasBuscadas'
import Spinner from '../componentes/Spinner'

const Layout = () => {

    const { modal, peliculaBuscada, modalTrailers, cargando } = useProyectoPeliculasProvider()

    return (

        <>
            <Headers />

            {cargando ? <Spinner /> :

                <main>

                    {peliculaBuscada?.length === 0 ? (
                        <>
                            <PeliculasPopulares />
                            <PeliculasDramas />
                            <PeliculasTomCruise />
                            <PeliculasPopularesInfantiles />
                            <PeliculasProximamente />
                        </>

                    ) : (<PeliculasBuscadas />)
                    }
                    {modal && <ModalPeliculas />}
                    {modalTrailers && <ModalTrailers />}

                </main>
            }

        </>
    )
}

export default Layout
