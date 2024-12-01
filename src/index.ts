import express from "express";
import cors from "cors";
import auth from "./api/auth/auth.routes";
import products from "./api/products/products.routes";
import cookieParser from "cookie-parser";
import Orders from "./api/orders/orders.routes";

const corsOptions = {
  origin: "http://localhost:3001", // El dominio desde donde haces las solicitudes
  credentials: true, // Permite el envío de cookies
};

const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/auth", auth);
app.use("/products", products);
app.use("/orders", Orders);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
