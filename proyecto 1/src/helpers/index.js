const formatearDinero = (value) => {
    const formatter = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
    })
    return formatter.format(value);
}

const calcularTotalPagar = (cantidad, plazo) => {
    let total;

    if(cantidad < 5000) {

    }else if(cantidad >= 5000 && cantidad < 10000) {
        total = cantidad * 1.4;
    }else if(cantidad >= 10000 && cantidad < 15000){
        total = cantidad * 1.3;
    }else {
        total = cantidad *1.2;
    }
    
    if( plazo === 6){
        total *= 1.1;
    }else if(plazo === 12){
        total *= 1.2;
    }else {
        total*= 1.3;
    }
    return total;

}
export {
    formatearDinero,
    calcularTotalPagar
} 