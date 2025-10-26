const express = require('express');
const { getChatbotResponse } = require('../utils/chatbotLogic');

const router = express.Router();

router.post('/', (req, res) => {
  const { message } = req.body;
  const reply = getChatbotResponse(message);
  res.json({ reply });
});

module.exports = router;