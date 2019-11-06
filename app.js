

const lugar =require ('./lugar/lugar');
const clima = require('./clima/clima')


const argv = require ('yargs').options({
    direccion:{
        alias:'d',
        desc:'direccion de la cuidad para obtner el cloima',
        demand:true
    }
}).argv;

// argv.direccion


// lugar.getLugarLatLng(argv.direccion)
// //     .then(console.log);
// clima.getClima(40.750000,-74.000000 )
// .then(console.log)
// .catch(console.log);

const getInfo  = async (direccion)=>{


    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat,coords.lng);
return `el mica es de${coords.direccion} es de ${temp}`;
    } catch (e) {
        return `no se puede determinar el clima de ${direccion}`;
    }

    //salida


}

getInfo(argv.direccion)
.then(console.log)
.catch(console.log);