// play.js
const { connect, setupInput } = require("./client");
console.log("Connecting ...");
connect();

setupInput();

// console.log("Successfully connected to game server");
// console.log("Name: JS");

// interpret incoming data as text
// conn.setEncoding("utf8");
// conn.on("data", (data) => {
//   console.log("Server says: ", data);
// });

// To accomplish this, inside the connect function, use the .on method on our conn object to register a "connect" handler (a callback function). In the callback, print a message for us (the player) to see - something like "Successfully connected to game server" will suffice.
