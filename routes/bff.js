const express = require('express');
const router = express.Router();
let axios = require('axios');

router.get('/products-line', async (req, res) => {
  await axios.request({
    method: 'GET',
    url: "https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e",
  }).then((response) => {
    res.json({ statusCode: 200, ...response.data });
  }).catch((error) => {
    res.json({ statusCode: 500, error: error });
  });
});

module.exports = router;
