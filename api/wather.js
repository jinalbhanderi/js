const axios = require("axios")
const city = process.argv[2]

const url=`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=faed4d9eb29d483a866000c901ccb680`;

axios.get(url).then(result=>{
    console.log(result.data.results[0].annotations.DMS);
    console.log(result.data.results[0].annotations.currency.alternate_symbols);
    console.log(result.data.results[0].annotations.sun.rise.nautical);
    

}).catch(err=>{
    console.log(err);
})