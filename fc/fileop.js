
const fs = require("fs");

addData = (data) => {

    const allData = view();

    const duplicate = allData.find(ele => {
        return ele.name == data.name
    })


    if (duplicate) {
        console.log(("your data is already exits"));
        return
    }
    allData.push(data)
    const dt = JSON.stringify(allData)
    fs.writeFile("userdetail.json", dt, () => {
        console.log("write file succesfully");
    })
}

const viewdata = () => {
    const data = view()
    console.log(data);
}
const view = () => {

    try {
        const data = fs.readFileSync("userdetail.json", "utf-8")
        return JSON.parse(data)
    } catch (error) {
        return [];
    }

}
const viewbyname = (name) => {
    const allData = view();

    const data = allData.find(ele=> {
        return ele.name == name;
    })

    console.log(data);

}
const removedata = (name) => {
    const allData = view()
    const newdata = allData.filter(ele => {
        return ele.name != name

    })
    const dt = JSON.stringify(newdata)
    fs.writeFile("userdetail.json", dt, () => {
        console.log("update aucc");
    })
}


module.exports = { addData, viewdata, viewbyname, removedata }