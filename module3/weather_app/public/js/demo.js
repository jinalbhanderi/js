
var headers = new Headers();
headers.append("X-CSCAPI-KEY", "aHAwSE1FQUpHMExPYU95TmZJT2g2c29iTFpyN0NOVWc1eUk5emZKbw==");

var requestOptions = {
    method: 'GET',
    headers: headers,   
    redirect: 'follow'
};
const getcountry = () => {
    fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
        .then(response => {
            return response.json()
        })
        .then(result => {
            console.log(result[0]);
            var options = "<option>--select countrie--</option>"
            for (var i = 0; i < result.length; i++) {
                options = options + "<option value=" + result[i].iso2 + ">" + result[i].name + "</option>"
                // console.log(result[i].name);
                // console.log(result[i].iso2);

            }

            country.innerHTML = options
        })
        .catch(error => console.log('error', error));

}

var countrycode;
const getstate = (ccode) => {
    // ccode=countrycode
    countrycode = ccode
    // console.log(ccode);
    fetch(`https://api.countrystatecity.in/v1/countries/${ccode}/states`, requestOptions)
        .then(response => {
            return response.json()
        })
        .then(result => {
            var options = "<option>---Select State---</option>";
            for (let i = 0; i < result.length; i++) {

                var options = options + "<option value=" + result[i].iso2 + ">" + result[i].name + "</option>"

            }
            state.innerHTML = options
        })
        .catch(error => console.log('error', error))
}
var statecode
const getcity = (scode) => {
    statecode = scode

    fetch(`https://api.countrystatecity.in/v1/countries/${countrycode}/states/${scode}/cities`, requestOptions)
        .then(response => {
            return response.json()
        })
        .then(result => {
            var options = "<option>---Select city---</option>";
            for (let i = 0; i < result.length; i++) {
                options = options + "<option>" + result[i].name + "</option>"

            }
            city.innerHTML = options
        })
}
const getweather = (cityname) => {

    var location = countrycode + "," + statecode + "," + cityname
    fetch(`/weather?location=${location}`).then(data => {
        return data.json()
    }).then(result => {
        console.log(result);
        loc.innerHTML = location
        cTemp.innerHTML = result.temp + "&#8451;";
        cPressure.innerHTML = result.pressure
        cHumidity.innerHTML = result.humidity

    })
}
const date = new Date("2022-03-25");
document.getElementById("d").innerHTML = date;
