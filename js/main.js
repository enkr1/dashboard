const links = [
  { name: 'Google Finance', url: 'https://www.google.com/finance/quote/SGD-MYR' },
  { name: 'CIMB', url: 'https://www.cimbclicks.com.sg/sgd-to-myr' },
];

document.addEventListener('DOMContentLoaded', function () {
  const linksList = document.getElementById('links-list');
  const updateLinks = () => {
    linksList.innerHTML = '';
    links.forEach(link => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = link.url;
      a.textContent = link.name;
      a.target = '_blank';  // Open link in new tab
      li.appendChild(a);
      linksList.appendChild(li);
    });
  }

  const addLink = (name, url) => {
    links.push({ name, url });
    updateLinks();
  }

  updateLinks();
});
