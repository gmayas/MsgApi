const express = require('express');
const router = express.Router();
const { getMessages, createMessage } = require('../controllers/msgs.controller');

router.get("/", (req, res) => {
    res.send({ Response: "APIRest for Pakaal Balam Bank working", By: "© 2025 Copyright: GMayaS C:\>_Desarrollo en Sistemas." }).status(200);
  });

router.get("/messages", getMessages);
router.post("/messages", createMessage);

module.exports = router;


