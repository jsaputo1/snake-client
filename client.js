const net = require("net");

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.148",
    port: 50541,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: JS");
    // for (let i = 0; i < 10; i++) {
    //   console.log(i);
    //   setTimeout(() => {
    //     conn.write("Move: left");
    //   }, i * 1000);
    // }
  });

  return conn;
};

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function () {
  const stdin = process.stdin;
  stdin.on("data", (key) => {
    process.stdout.write(".");
    if (key === "\u0003") {
      process.exit();
    }
  });
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

module.exports = { connect, setupInput };
