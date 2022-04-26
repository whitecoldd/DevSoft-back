const express = require('express');
const app = new express();
const authRouter = require("./routes/auth.routes")
app.use('/api', authRouter);

app.listen(4300, () => {
    console.log("Express JS started succesfully.");
});