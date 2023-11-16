const summary = document.getElementById("summary");

fetch("./data.json")
  .then((response) => response.json())
  .then((categories) => {
    categories.map((category) => {
      const summaryDetailDiv = document.createElement("div");
      const summaryDetailTitleDiv = document.createElement("div");
      const svg = document.createElement("img");
      const h3 = document.createElement("h3");
      const p = document.createElement("p");

      summaryDetailDiv.classList.add("summary-detail");
      summaryDetailTitleDiv.classList.add("summary-detail-title");
      p.classList.add("summary-detail-score");

      h3.innerHTML = category.category;
      p.innerHTML = `<span>${category.score}</span> / 100`;
      svg.src = category.icon;

      summaryDetailTitleDiv.appendChild(svg);
      summaryDetailTitleDiv.appendChild(h3);
      summaryDetailDiv.appendChild(summaryDetailTitleDiv);
      summaryDetailDiv.appendChild(p);
      summary.appendChild(summaryDetailDiv);
    });
  });

function createSection() {}
