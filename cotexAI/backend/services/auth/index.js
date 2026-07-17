import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json("Auth server is running");
})

app.listen(port, () => {
    console.log(`Auth server is running on port ${port}`);
})
