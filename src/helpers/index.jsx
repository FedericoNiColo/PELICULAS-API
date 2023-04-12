

export function FormatearTiempo(min) {

    const tiempo = min / 60
    const hora = Math.trunc(tiempo)

    const calculoMin = ((tiempo - hora) * 100).toFixed(2)
    const minutos = Math.ceil(calculoMin)


    return hora + 'hs' + ' ' + minutos + 'min';

}

export function handlePorcentaje (num)  {

    const porcentaje = Math.ceil((num * 1000) / 100)

    return porcentaje

}