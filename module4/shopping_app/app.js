

const mongoClient = require("mongodb").MongoClient;
const dbname = "assigntask";
const dburl = "mongodb://127.0.0.1:27017/assigntask";

mongoClient.connect(dburl, (error, client) => {
    if (error) {
        console.log(error);
        return;
    }

    console.log("MongoDB connected....");
    const db = client.db(dbname);
    console.log("Database connected successfully!...");
})

  //---------------------------  Q4. Create Require collections for online shopping app and documents.  ------------------------------//

  //                             i. User / ii. Product category / iii. Product / iv. Order / v. Review

  // db.createCollection("User", (error, resp) => {
  //     if (error) {
  //         console.log(error);
  //         return;
  //     }
  //     console.log("Collection User successfully...");
  // })

  // db.createCollection("Product category", (error, resp) => {
  //     if (error) {
  //         console.log(error);
  //         return;
  //     }
  //     console.log("Collection Product category successfully...");
  // })

  // db.createCollection("Product", (error, resp) => {
  //     if (error) {
  //         console.log(error);
  //         return;
  //     }
  //     console.log("Collection Product successfully...");
  // })

  //   db.createCollection("Order", (error, resp) => {
  //     if (error) {
  //       console.log(error);
  //       return;
  //     }
  //     console.log("Collection Order succesfully...");
  //   });

  // db.createCollection("Review", (error, resp) => {
  //     if (error) {
  //         console.log(error);
  //         return;
  //     }
  //     console.log("Collection Review successfully...");
  // })

  //   var data = [
  //     { name: "table", price: 700 },
  //     { name: "watch", price: 3000 },
  //     { name: "AC", price: 20000 },
  //   ];
  //   db.collection("Product").insertMany(data, (error, resp) => {
  //     if (error) {
  //       console.log(error);
  //       return;
  //     }
  //     console.log(resp);
  //   });

  // var data = [{ name: "Vaibhav" }, { name: "Rahul" }, { name: "jaydeep" }];
  // db.collection("User").insertMany(data, (error, resp) => {
  //     if (error) {
  //         console.log(error);
  //         return;
  //     }
  //     console.log(resp);
  // })

  // var data = [{ catname: "furniture" }, { catname: "Dive" }, { catname: "electronic" }];
  // db.collection("Product category").insertMany(data, (error, resp) => {
  //     if (error) {
  //         console.log(error);
  //         return;
  //     }
  //     console.log(resp);
  // })

  // var data = [{pname:"toy gun",qty:15 }, { pname:"bag", qty:20 }, { pname:"fun",qty:4 }];
  // db.collection("Order").insertMany(data, (error, resp) => {
  //     if (error) {
  //         console.log(error);
  //         return;
  //     }
  //     console.log(resp);
  // })

  // var data = [{pname:"toy gun",Review:"good" }, { pname:"bag", Review:"very nice" }, { pname:"fun",Review:"very good" }];
  // db.collection("Review").insertMany(data, (error, resp) => {
  //     if (error) {
  //         console.log(error);
  //         return;
  //     }
  //     console.log(resp);
  // })

  //------------------  Q5. Write command to show all data from product collections and sort in ascending order  --------------------------//

  // db.collection("Product").find({}).sort({ "name": 1 }).toArray((error,resp)=> {
  //     if(error) {
  //         console.log(error);
  //         return;
  //     }
  //     console.log(resp);
  // })

  //----------------------------------- Q6. Update product price for particular product. ------------------------------------//

  // db.collection("Product").updateOne({ name: "laptop" }