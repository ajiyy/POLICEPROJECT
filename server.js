require("dotenv").config({ override: true });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, { family: 4 })
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));

console.log("AUTH:", require("./routes/auth"));
console.log("COMPLAINT:", require("./routes/complaint"));
console.log("FIR:", require("./routes/fir"));
console.log("OFFICER:", require("./routes/officer"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/complaint", require("./routes/complaint"));
app.use("/api/fir", require("./routes/fir"));
app.use("/api/officer", require("./routes/officer"));

app.use("/test", (req, res) => res.send("OK"));

app.listen(5000, ()=>console.log("Server running"));