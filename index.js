const express = require('express');
const app = new express();
const loginRouter = require("./routes/login.routes")
app.use('/api', loginRouter);

app.listen(4300, () => {
    console.log("Express JS started succesfully.");
});