const express = require("express");
const cors = require("cors");
const ControllerPatient = require("./controllers/controller");

const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/getPatient", ControllerPatient.getPatient);
app.post("/addPatient", ControllerPatient.addPatient);
app.get("/detailPatient/:id", ControllerPatient.detailPatient);
app.put("/updatePatient/:id", ControllerPatient.updatePatient);
app.delete("/deletePatient/:id", ControllerPatient.deletePatient);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
