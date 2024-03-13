const express = require('express');

const router = express.Router();

const { subscribe, getEmails } = require("../../controllers/auth");

router.post("/subscribe", subscribe);
router.get("/subscribe", getEmails);

module.exports = router;