const axios = require ('axios');


const getLugarLatLng = async (dir)=>{

const encondedUrl = encodeURI(dir);



const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encondedUrl}`,
    headers: {'x-rapidapi-key': '35794f9c8dmsh9ba007b608f6941p1ca922jsn4ebb025fb5f5'}
  });

//   instance.get()
//         .then( resp => {
//             console.log(resp.data.Results[0]);
//         })
//         .catch( err => {
//             console.log('ERROR!!!',err);
//         });

        const resp = await instance.get();
        if (resp.data.Results.length=== 0) {
            throw new Error(`no hay mensaje para ${dir}`);
        }

const data       = resp.data.Results[0];
const direccion  = data.name;
const lat        = data.lat;
const lng        = data.lon;


   return {
    direccion,
    lat,
    lng
    }     
}

module.exports ={
    getLugarLatLng
}