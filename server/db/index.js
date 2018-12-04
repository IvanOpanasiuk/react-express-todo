const mongoose = require("mongoose");
const config = require("./config");

mongoose.Promise = global.Promise;

const connectionURL = `mongodb://${config.db.user}@${config.db.host}:${
  config.db.port
}/${config.db.name}`;
mongoose
  .connect(
    connectionURL,
    { useNewUrlParser: true }
  )
  .catch(e => console.error(e));

const db = mongoose.connection;

db.on("connected", () => {
  console.log(`Mongoos connection open on ${connectionURL}`);
});
db.on("error", err => console.error(err));
db.on("disconnected", () => {
  console.log(`Mongoos connection disconnected`);
});
process.on("SIGINT", () => {
  db.close(() => {
    console.log("mongoose connection closed throw app terminatatnio");
    process.exit(0);
  });
});
