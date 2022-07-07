const { Router } = require("express");
const authRouter = require("./auth.router");
const msgRouter = require("./message.router");
const userRouter = require("./user.router");

const router = Router();

router.use("/auth", authRouter);

router.use("/users", userRouter);

router.use("/messages", msgRouter);

module.exports = router;