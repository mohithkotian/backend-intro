import express from "express";
import userRouter from "../routes/user.routes.js";
import postRouter from "../routes/post.route.js";

const app = express();
app.use(express.json());

// routes declared
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

// example route: http://localhost:4000/api/v1/users/register

export default app;
