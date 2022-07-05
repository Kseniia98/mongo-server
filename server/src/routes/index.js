const { Router } = require("express");
const msgRouter = require("./message.router");
const userRouter = require("./user.router");

const router = Router();

router.use("/users", userRouter);

router.use("/messages", msgRouter);

module.exports = router;