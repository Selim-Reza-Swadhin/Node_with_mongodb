var MongoClient = require('mongodb').MongoClient;

//only connection one database(school)
//var URL = 'mongodb+srv://selimDemo:selimDemo@cluster0.b5mnj.mongodb.net/school?retryWrites=true&w=majority';

//connection all database(admin, config, local, demo, school...)
var URL = 'mongodb+srv://selimDemo:selimDemo@cluster0.b5mnj.mongodb.net?retryWrites=true&w=majority';

var config = {useUnifiedTopology: true};

//connection for test
// MongoClient.connect(URL, config, function (error) {
//     if(error){
//         console.log("Connection Fail");
//     }else{
//         console.log("Connection Success");
//     }
// });

//main connection
MongoClient.connect(URL, config, function (error, MymongoClient) {
    if (error) {
        console.log("Connection Fail");
    } else {
        console.log("Connection Success");
        //insert data fn call
        //InsertData(MymongoClient);
        //InsertManyData(MymongoClient);
        //delete data fn call
        //deleteData(MymongoClient);
        //delete all data fn call
        //deleteAllData(MymongoClient);
        //find one data fn call
        //FindOneWithoutCondition(MymongoClient);
        //FindOneWithCondition(MymongoClient);
        //FindAllWithCondition(MymongoClient);
        // FindAllDataByProjection(MymongoClient);
        //FindAllDataByQuery(MymongoClient);
        //FindAllDataByLimit(MymongoClient);
        //FindAllDataBySort(MymongoClient);
        //UpdateMyData(MymongoClient);
        //CreateMyCollection(MymongoClient);
        DeleteMyCollection(MymongoClient);
    }
});

//insert data
function InsertData(MymongoClient) {
    var MyDataBase = MymongoClient.db("school");
    var MyCollection = MyDataBase.collection("students");
    //MyCollection.insertOne();

    var myobjData = {Name: "swadhinv", Roll: "14v", Class: "ninev", City: "Dhaka"}

    MyCollection.insertOne(myobjData, function (error) {
        if (error) {
            console.log("Data insert Fail");
        } else {
            console.log("Data insert Success");
        }
    });

}


//insert many data
function InsertManyData(MymongoClient) {
    var MyDataBase = MymongoClient.db("school");
    var MyCollection = MyDataBase.collection("students");
    //MyCollection.insertMany();

    var myobjMData = [
        {name: 'John', address: 'Highway 71', city: 'natore', phone: '01724063642'},
        {name: 'Peter', address: 'Lowstreet 4', city: 'natore', phone: '01724063643'},
        {name: 'Amy', address: 'Apple st 652', city: 'natore', phone: '01724063644'},
        {name: 'Hannah', address: 'Mountain 21', city: 'natore', phone: '01724063645'},
        {name: 'Michael', address: 'Valley 345', city: 'natore', phone: '01724063646'},
        {name: 'Sandy', address: 'Ocean blvd 2', city: 'natore', phone: '01724063647'},
        {name: 'Betty', address: 'Green Grass 1', city: 'natore', phone: '01724063648'},
        {name: 'Richard', address: 'Sky st 331', city: 'natore', phone: '01724063649'},
        {name: 'Susan', address: 'One way 98', city: 'natore', phone: '01724063650'},
        {name: 'Vicky', address: 'Yellow Garden 2', city: 'natore', phone: '01724063651'},
        {name: 'Ben', address: 'Park Lane 38', city: 'natore', phone: '01724063652'},
        {name: 'William', address: 'Central st 954', city: 'natore', phone: '01724063653'},
        {name: 'Chuck', address: 'Main Road 989', city: 'natore', phone: '01724063654'},
        {name: 'Viola', address: 'Sideway 1633', city: 'natore', phone: '01724063655'}
    ];

    MyCollection.insertMany(myobjMData, function (error, resultt) {
        if (error) {
            console.log("Data insert Fail");
        } else {
            console.log("Data insert many Success");
            console.log("Number of documents inserted: " + resultt.insertedCount);
        }
    });
}


//delete data
function deleteData(MymongoClient) {
    var MyDataBase = MymongoClient.db("school");
    var MyCollection = MyDataBase.collection("students");

    //condition for delete data
    var delobjData = {Name: "swadhinv"};

    MyCollection.deleteOne(delobjData, function (error) {
        if (error) {
            console.log("Data delete Fail");
        } else {
            console.log("Data delete Success");
        }
    });
}


//delete all data
function deleteAllData(MymongoClient) {
    var MyDataBase = MymongoClient.db("school");
    var MyCollection = MyDataBase.collection("students");

    MyCollection.deleteMany(function (error, resultObj) {
        if (error) {
            console.log("Data delete Fail");
        } else {
            console.log("Data all delete Success");
            //console.log(resultObj);//for details
            console.log(resultObj.result.n + " items deleted");
        }
    });
}


//find only one data

function FindOneWithoutCondition(MymongoClient) {
    var MyDataBase = MymongoClient.db("school");
    var MyCollection = MyDataBase.collection("students");

    //default first data
    var findObj = {};
    MyCollection.findOne(findObj, function (error, resultt) {
        console.log(resultt);
        //console.log(resultt.name);
    });
}


//find only one data
function FindOneWithCondition(MymongoClient) {
    var MyDataBase = MymongoClient.db("school");
    var MyCollection = MyDataBase.collection("students");


    //condition
    var findObj = {phone: "01724063652"};
    MyCollection.findOne(findObj, function (error, resultt) {
        console.log(resultt);
        //console.log(resultt.name);
    });
}


//find all data
function FindAllWithCondition(MymongoClient) {
    var MyDataBase = MymongoClient.db("school");
    var MyCollection = MyDataBase.collection("students");

//find all data
    MyCollection.find().toArray(function (error, resultt) {
        console.log(resultt);
        //console.log(resultt.name);
    });
}


//find all data
function FindAllDataByProjection(MymongoClient) {
    var MyDataBase = MymongoClient.db("school");
    var MyCollection = MyDataBase.collection("students");

    // var itemObj = {};
    // var itemProjection = {projection:{city:""}};
    var ItemObj = {}
    var ItemProjection = {projection: {Address: ""}}

//select column

    MyCollection.find(ItemObj, ItemProjection).toArray(function (error, resultt) {
        console.log(resultt);
        //console.log(resultt.name);
        //console.log(resultt[2].address);
    });
}


//find query
function FindAllDataByQuery(MymongoClient) {
    var MyDataBase = MymongoClient.db("school");
    var MyCollection = MyDataBase.collection("students");


    //condition
    //var query = { city: "natore" };
    var query = {city: "natore", phone: '01724063652'};

    MyCollection.find(query).toArray(function (error, resultt) {
        console.log(resultt);
        //console.log(resultt.name);
        //console.log(resultt[2].address);
    });
}


//limit
function FindAllDataByLimit(MymongoClient) {
    var MyDataBase = MymongoClient.db("school");
    var MyCollection = MyDataBase.collection("students");


    MyCollection.find().limit(5).toArray(function (error, resultt) {
        console.log(resultt);
        //console.log(resultt.name);
        //console.log(resultt[2].address);
    });
}

//sort
function FindAllDataBySort(MymongoClient) {
    var MyDataBase = MymongoClient.db("school");
    var MyCollection = MyDataBase.collection("students");

    //var mysort = {name: 1};//asc
    var mysort = { name: -1 };//desc
    MyCollection.find().sort(mysort).toArray(function (error, resultt) {
        console.log(resultt);
        //console.log(resultt.name);
        //console.log(resultt[2].address);
    });
}



//update data
function UpdateMyData(MymongoClient){
    var MyDataBase= MymongoClient.db("school");
    var MyCollection= MyDataBase.collection('students');

    var MyQuery={address:"One way 98"};
    var MyNewValues={$set:{name:"Rabbil Hasan Rupom",city:"Gaibandha"}}

    MyCollection.updateOne(MyQuery, MyNewValues, function (error,result) {
        console.log(result);
    })
}


//create table or collection
function CreateMyCollection(MymongoClient){
    var MyDataBase= MymongoClient.db("school");
    MyDataBase.createCollection("teachers",function (error,result) {
        console.log(result);
    })
}


//delete table or collection
function DeleteMyCollection(MymongoClient){
    var MyDataBase= MymongoClient.db("school");

    MyDataBase.dropCollection("teachers",function (error,result) {
        console.log(result);
    })

}
