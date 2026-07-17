import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import proxy from "express-http-proxy";
dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", proxy(process.env.AUTH_SERVICE_URL)); 

app.get("/", (req, res) => {
    res.json("Gateway server is running");
})

app.listen(port, () => {
    console.log(`Gateway server is running on port ${port}`);
})
