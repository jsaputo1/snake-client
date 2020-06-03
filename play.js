// play.js
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
connect();

setupInput(connect());

// console.log("Successfully connected to game server");
// console.log("Name: JS");

// interpret incoming data as text
// conn.setEncoding("utf8");
// conn.on("data", (data) => {
//   console.log("Server says: ", data);
// });

// To accomplish this, inside the connect function, use the .on method on our conn object to register a "connect" handler (a callback function). In the callback, print a message for us (the player) to see - something like "Successfully connected to game server" will suffice.
