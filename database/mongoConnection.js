// ==============================================================
//             IGNORE PLS, WORK IN PROGRESS
// ==============================================================

// Must replicate Promise implementation from mysqlConnection

const mongoose = require("mongoose");
const Promise = require("bluebird");
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
};

// ======= TODO ===========
// GET http://127.0.0.1:4000/api/listings
// TypeError: mongoose.createConnection(...).disposer is not a function
//     at getMongoConnection (/Users/benjaminmangold/HackReactor/sb-Booking/database/mongoConnection.js:20:52)
//     at Object.getListings (/Users/benjaminmangold/HackReactor/sb-Booking/database/index.js:14:23)
//     at app.get (/Users/benjaminmangold/HackReactor/sb-Booking/server/app.js:25:11)
//     at Layer.handle [as handle_request] (/Users/benjaminmangold/HackReactor/sb-Booking/node_modules/express/lib/router/layer.js:95:5)
//     at next (/Users/benjaminmangold/HackReactor/sb-Booking/node_modules/express/lib/router/route.js:137:13)
//     at Route.dispatch (/Users/benjaminmangold/HackReactor/sb-Booking/node_modules/express/lib/router/route.js:112:3)
//     at Layer.handle [as handle_request] (/Users/benjaminmangold/HackReactor/sb-Booking/node_modules/express/lib/router/layer.js:95:5)
//     at /Users/benjaminmangold/HackReactor/sb-Booking/node_modules/express/lib/router/index.js:281:22
//     at Function.process_params (/Users/benjaminmangold/HackReactor/sb-Booking/node_modules/express/lib/router/index.js:335:12)
//     at next (/Users/benjaminmangold/HackReactor/sb-Booking/node_modules/express/lib/router/index.js:275:10)
//     at SendStream.error (/Users/benjaminmangold/HackReactor/sb-Booking/node_modules/serve-static/index.js:121:7)
//     at emitOne (events.js:116:13)
//     at SendStream.emit (events.js:211:7)
//     at SendStream.error (/Users/benjaminmangold/HackReactor/sb-Booking/node_modules/send/index.js:270:17)
//     at SendStream.onStatError (/Users/benjaminmangold/HackReactor/sb-Booking/node_modules/send/index.js:421:12)
//     at next (/Users/benjaminmangold/HackReactor/sb-Booking/node_modules/send/index.js:736:16)
//     at onstat (/Users/benjaminmangold/HackReactor/sb-Booking/node_modules/send/index.js:725:14)
//     at FSReqWrap.oncomplete (fs.js:152:21)

const uri = "mongodb://127.0.0.1:27017/booking";

function getMongoConnection() {
  return Promise.mongoose
    .createConnection(uri, options)
    .disposer(function(connection) {
      mongoose.releaseConnection(connection);
    });
}

module.exports = getMongoConnection;
