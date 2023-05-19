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
  } else if (key === 'q' || key === 'Q') {
    connection.write("Say: Hello");
  } else if (key === 't' || key === 'T') {
    connection.write("Say: Bye!");
  } else if (key === 'e' || key === 'E') {
    connection.write("Say: Good luck");
  } else if (key === 'j' || key === 'J') {
    connection.write("Say: Hungry");
  }
};

module.exports = { setupInput };