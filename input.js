let connection = undefined;

//setup interface to handle user input from stdin
const setupInput = (conn) => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput)
  connection = conn;
  return stdin;
};

const handleUserInput = (key) => {
  const movementCommands = {
    "w": "Move: up",
    "a": "Move: left",
    "s": "Move: down",
    "d": "Move: right"
  }
  const messages = {
    "h": "Say: Hello!",
    "g": "Say: Goodbye!",
    "l": "LOL"
  }
  if (key === '\u0003') {
    process.exit();
  }
  if (movementCommands[key]) {
    connection.write(movementCommands[key]);
  }
  if (messages[key]) {
    connection.write(messages[key])
  }
}



module.exports = setupInput; 
