// const express = require('express');
// const axios = require('axios');
// const app = express();
// const PORT = 3000;
//
// app.use(express.static('public'));
//
// app.get('/currency-rate', async (req, res) => {
//   try {
//     const response = await axios.get('https://www.cimbclicks.com.sg/sgd-to-myr');
//     const html = response.data;
//     const regex = /<label id="rateStr" class="rateStr">SGD 1.00 = MYR ([\d.]+)<\/label>/;
//     const match = html.match(regex);
//     if (match && match[1]) {
//       res.json({ rate: match[1] });
//     } else {
//       res.status(500).json({ error: 'Rate not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch the currency rate' });
//   }
// });
//
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
