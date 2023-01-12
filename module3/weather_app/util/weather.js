const axios = require("axios")


const getweather = (lat, lng, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=127d880d7784727f24c339fc6862b782&units=metric`;
    axios.get(url).then(result => {
         temp = result.data.main.temp
         humidity = result.data.main.humidity
         pressure = result.data.main.pressure
         city = result.data.name

        callback(undefined, {
            temp, humidity, pressure, city
        })
        //     console.log(`
        //     temp :${temp}
        //     humidity : ${humidity} 
        //     pressure : ${pressure}
        //     city : ${city}
        //  `
        //     );
    }).catch(err => {
        console.log(err);
    })
}
module.exports = { getweather }


