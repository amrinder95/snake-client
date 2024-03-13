const net = require("net");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: "localhost", //IP Address here
    port: "50541"//PORT number here
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");
  //console log when we are connected
  conn.on("connect", () => {
    console.log("Successfully connected to game server!")
    conn.write("Name: AMS")
  })
  //console log incoming data
  conn.on("data", (data) => {
    console.log("Server said:", data);
  });
  return conn;
}
console.log("Connecting...");
module.exports = connect;