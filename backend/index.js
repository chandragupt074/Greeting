import express from "express";
import cors from "cors";
import dotenv from "dotenv"
dotenv.config({})


const app = express();
app.use(cors());



app.get("/api/greet", (req, res) => {
  const name = req.query.name;
  if (!name) {
    return res.status(400).json({
      error: "Name is required",
    });
  }
  res.json({ message: `Hello ${name} Welcome to Younglabs.` });
});





const PORT = process.env.PORT||8000;

app.listen(PORT, () => {
  console.log(`server running at port no. ${PORT}`);
});
