const express = require("express");
const { login } = require('');

const router = express.Router();
router.get("/login", login);

module.exports = router;