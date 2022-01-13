const express = require("express");
const cors = require("cors");
const bearerToken = require("express-bearer-token");
const PORT = 3001;
const app = express();
const { 
  userRouter,
} = require("./routers");

app.use(express.json());
app.use(cors());
app.use(bearerToken());

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is Listening on ${PORT}`);
});