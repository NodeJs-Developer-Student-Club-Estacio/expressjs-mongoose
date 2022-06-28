import "./lib/db";
import express from "express";
import countryRoutes from "./routes/country";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3333;
// require("./controllers/authController")(app);

require("./controllers/authController")(app);

app.use(bodyParser.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/countries", countryRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
