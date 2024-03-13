const net = require("net");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: "localhost", //IP Address here
    port: "50541"//PORT number here
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");
  //console log incoming data
  conn.on("data", (data) => {
    console.log("Server said:", data);
  });
  return conn;
}



console.log("Connecting...");

module.exports = connect;