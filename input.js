// Stores the active TCP connection object.
let connection;
/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;

  stdin.on("data", (key) => {
    process.stdout.write(".");
    if (key === "\u0003") {
      process.exit();
    } else if (key === "w") {
      connection.write("Move: up");
    } else if (key === "s") {
      connection.write("Move: down");
    } else if (key === "a") {
      connection.write("Move: left");
    } else if (key === "d") {
      connection.write("Move: right");
    }
  });

  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

module.exports = { setupInput };
