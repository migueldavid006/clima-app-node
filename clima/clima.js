const axios = require ('axios');


const getClima = async (lat,lng)=>{



    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c74fd4915fdde94d2de704d86c63f4dd&inits=metric`)

    return resp.data.main.temp;
}

module.exports={
    getClima
}