const yargs = require("yargs");
const file=require("./fileop")
yargs.command({
    command: "add",
    builder: {
        name: {
            type: String
        },
        email: {
            type: String
        },
        phno: {
            type: Number
        },
        course: {
            type: String
        }
    },
    handler: function (argv) {
        const data = {
            name: argv.name,
            email: argv.email,
            phno: argv.phno,
            course: argv.course
        }
        file.addData(data)
    }
})
yargs.command({
    command: "view",
    handler: function () {
        console.log("view file is calling");
        file.viewdata()
    }
})
yargs.command({
    command: "viewbyname",
    builder: {
        name: {
            type: String
        },
       
    },
    handler: function (argv) {
        file.viewbyname(argv.name)
    }
})
yargs.command({
    command: "remove",
    builder: {
        name: {
            type: String
        }
    },
    handler: function (argv) {
        file.removedata(argv.name)
    }
})
yargs.argv