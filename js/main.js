const links = [
  { name: "Google Finance", url: "https://www.google.com/finance/quote/SGD-MYR" },
  { name: "CIMB", url: "https://www.cimbclicks.com.sg/sgd-to-myr" },
  { name: "Google Analytics", url: "https://analytics.google.com/analytics/web/" },
  { name: "Forbes Real-Time Billionaires", url: "https://www.forbes.com/real-time-billionaires/" },
  { name: "BBC News", url: "https://www.bbc.com/news" },
  { name: "The Hacker News", url: "https://thehackernews.com/" },
  { name: "Reddit", url: "https://www.reddit.com/" },
  { name: "LeetCode (China)", url: "https://leetcode.cn/accounts/transfer_from_us/" },
  { name: "LeetCode", url: "https://leetcode.com/u/enkr1/" },
  { name: "Bloomberg", url: "https://www.bloomberg.com/" },
  { name: "CSDN", url: "https://www.csdn.net/" },
  { name: "Douyin", url: "https://www.douyin.com/discover" },
  // { name: "GitHub", url: "https://github.com/" }
];

document.addEventListener("DOMContentLoaded", function () {
  const linksList = document.getElementById("links-list");
  const updateLinks = () => {
    linksList.innerHTML = "";
    links.forEach(link => {
      const div = document.createElement("div");
      const a = document.createElement("a");
      a.href = link.url;
      a.textContent = link.name;
      a.target = "_blank";  // Open link in new tab
      div.appendChild(a);
      linksList.appendChild(div);
    });
  }

  const addLink = (name, url) => {
    links.push({ name, url });
    updateLinks();
  }

  updateLinks();
});
