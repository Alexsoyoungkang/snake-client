let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// special keys to match with the movement and messages
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w' || key === 'W') {
    connection.write("Move: up");
  } else if (key === 'a' || key === 'A') {
    connection.write("Move: left");
  } else if (key === 's' || key === 'S') {
    connection.write("Move: down");
  } else if (key === 'd' || key === 'D') {
    connection.write("Move: right");
  } else if (key === 'j' || key === 'J') {
    connection.write("Say: Attack!");
  } else if (key === 'k' || key === 'K') {
    connection.write("Say: Keep moving");
  } else if (key === 'i' || key === 'I') {
    connection.write("Say: Move faster");
  } else if (key === 'l' || key === 'L') {
    connection.write("Say: Hungry");
  }
};

module.exports = { setupInput };