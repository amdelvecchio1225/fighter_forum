const express = require('express');
const router = express.Router();

router.use('/fighters', require("./fighters"));

module.exports = router;