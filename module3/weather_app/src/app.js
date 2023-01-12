const express = require("express")
const path = require("path")
const hbs = require("hbs")
const app = express()
const port = 8000
const geocode = require("../util/geocode");
const weather = require("../util/weather");
const viewpath = path.join(__dirname, "../template/view");
const publicpath = path.join(__dirname, "../public");
app.set("view engine", "hbs")
app.set("views", viewpath)
app.use(express.static(publicpath))
app.get("/", (req, resp) => {
    resp.render("home")
})

app.get("/weather", (req, resp) => {
    const location = req.query.location
    geocode.getGeoCode(location, (err, data) => {
        if (err) {
            console.log("invalid api");

            return
        }
        lng = data.lng
        lat = data.lat
        weather.getweather(lat, lng, (err, data) => {
            if (err) {
                console.log("invalid");
                return
            }
            resp.send(data)

        })
    })

})
app.listen(port, (req, resp) => {
    console.log("live server running out", port);
})      