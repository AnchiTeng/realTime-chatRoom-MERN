require("dotenv").config();
const app = require('./app');


const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true, 
  useNewUrlParser: true,
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose Connection ERROR: " + err.message);
});

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected!");
});

require('./models/Chatroom');
require('./models/User');
require('./models/Message');

const PORT = 5000 || process.env.PORT;


app.listen(PORT,()=>console.log(`Server is listening PORT ${PORT}`));