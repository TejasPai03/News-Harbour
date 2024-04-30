document.addEventListener("DOMContentLoaded", function() {
    const cardContainer = document.querySelector(".card-container");
    const template = document.getElementById("template-news-card");

    // Dynamically create cards
    function createNewsCard(news) {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".card-image img").src = news.img;
        clone.querySelector(".card-content h3").textContent = news.headline;
        clone.querySelector(".news-date").textContent = news.date;
        clone.querySelector(".news-description").textContent = news.headline;
        clone.querySelector(".news-source").textContent = "Source: " + news.source;

        clone.querySelector('.card').addEventListener('click', function() {
            window.open(news.link, '_blank');
        });

        return clone;
    }

    // Remove old cards and put specific category cards
    function renderNewsCards(data) {
        data.forEach(news => {
            const card = createNewsCard(news);
            cardContainer.appendChild(card);
        });
    }

    fetch('../News_Harbour/News_Harbour/output/htspider.json')
        .then(response => response.json())
        .then(data => {
            renderNewsCards(data);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});
