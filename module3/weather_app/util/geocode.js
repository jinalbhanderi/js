const axios = require("axios")

const getGeoCode = (city, callback) => {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=faed4d9eb29d483a866000c901ccb680`;


    axios.get(url).then(result => {
         data = result.data.results[0].geometry
         lng = data.lng
         lat = data.lat

        callback(undefined, {
            lat, lng
        })
        //     console.log(`
        // lng : ${lng} 
        // lat : ${lat}
        // `);

    }).catch(err => {
        console.log(err);
    })
}
getGeoCode()
module.exports = { getGeoCode }


