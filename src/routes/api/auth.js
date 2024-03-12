const express = require('express');

const router = express.Router();

const { subscribe } = require("../../controllers/auth");

router.post("/subscribe", subscribe);

module.exports = router;