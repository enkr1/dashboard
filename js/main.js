// js/main.js

async function fetchRate() {
  try {
    const response = await fetch('https://www.google.com/finance/quote/SGD-MYR?hl=en&window=5D', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    const text = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    const rateElement = doc.querySelector('.YMlKec.fxKbKc');

    if (rateElement) {
      const rate = rateElement.textContent;
      document.getElementById('rate').textContent = rate;
      document.getElementById('notification-rate').textContent = rate;
      document.getElementById('notification').classList.add('visible');
    } else {
      throw new Error('Rate not found');
    }
  } catch (error) {
    document.getElementById('rate').textContent = 'Rate not available';
    console.error('Error fetching currency rate:', error);
  }
}

document.getElementById('close-notification').addEventListener('click', () => {
  document.getElementById('notification').classList.remove('visible');
});

fetchRate();
