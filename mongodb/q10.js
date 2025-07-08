// Create a folder mongo-replica and sub folders data1 data2 and data3

// Open command prompt and start running servers on separate tabs

// mongod -replSet rs1 -logpath "d:\mongo-replica\data1\1.log" --dbpath "d:\mongo-replica\data1" --port 27018

// mongod -replSet rs1 -logpath "d:\mongo-replica\data2\2.log" --dbpath "d:\mongo-replica\data2" --port 27019

// mongod -replSet rs1 -logpath "d:\mongo-replica\data3\3.log" --dbpath "d:\mongo-replica\data3" --port 27020

// Follow these instructions to configure replica set:

// mongosh --port 27018

// rs.initiate({_id:"rs1",members:[{_id:0,host:"127.0.0.1:27018"},{_id:1,host:"127.0.0.1:27019"},{_id:2,host:"127.0.0.1:27020"}]})

// rs.config()  //to check the config
// rs.status()

// Use mongosh command with the following connection string and the primary server will automatically get connected:


// mongosh "mongodb://localhost:27018,localhost:27019,localhost:27020/?replicaSet=rs1"

// show dbs
// use mytestdb
// db.createCollection("customers")
// db.customers.insertOne({name:"John"})

// Check secondary servers. Check both the servers if data is replicated
// mongosh --port 270xx
// Secondary will start, can read but cannot write
// db.getMongo().setReadPref("secondary")  //or rs.secondaryOk()
// use mytestdb
// db.customers.find() – will work now

// mongosh --port 270xx
// Secondary will start, can read but cannot write
// db.getMongo().setReadPref("secondary")  //or rs.secondaryOk()
// use mytestdb
// db.customers.find() – will work now





// ✅ STEP-BY-STEP: Setup MongoDB Replica Set on Linux
// 🔹 Step 1: Create folders
// Run:

// mkdir -p ~/mongo-replica/data1 ~/mongo-replica/data2 ~/mongo-replica/data3
// This creates:

// ~/mongo-replica/data1
// ~/mongo-replica/data2
// ~/mongo-replica/data3
// 🔹 Step 2: Open 3 separate terminals (or tabs)
// And run the following commands in each one:

// 🟢 Terminal 1:
// mongod --replSet rs1 --logpath ~/mongo-replica/data1/1.log --dbpath ~/mongo-replica/data1 --port 27018
// 🟢 Terminal 2:
// mongod --replSet rs1 --logpath ~/mongo-replica/data2/2.log --dbpath ~/mongo-replica/data2 --port 27019
// 🟢 Terminal 3:
// mongod --replSet rs1 --logpath ~/mongo-replica/data3/3.log --dbpath ~/mongo-replica/data3 --port 27020
// 🔹 Step 3: Initiate replica set
// Open a new 4th terminal and connect to the first instance:

// mongosh --port 27018
// Then run this inside mongosh:

// rs.initiate({
//   _id: "rs1",
//   members: [
//     { _id: 0, host: "127.0.0.1:27018" },
//     { _id: 1, host: "127.0.0.1:27019" },
//     { _id: 2, host: "127.0.0.1:27020" }
//   ]
// })
// Then check:

// rs.config()
// rs.status()
// 🔹 Step 4: Connect to the replica set
// From any terminal:

// mongosh "mongodb://localhost:27018,localhost:27019,localhost:27020/?replicaSet=rs1"
// The shell will automatically connect to the primary node.

// ✅ DONE!
// You're now running a replica set on 3 local MongoDB instances on ports 27018–27020.

