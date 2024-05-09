document.addEventListener("DOMContentLoaded", function() {
    const cardContainer = document.querySelector(".card-container");
    const template = document.getElementById("template-news-card");
    let newsData = [];

    // Dynamically create cards
    function createNewsCard(news) {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".card-image img").src = news.img;
        clone.querySelector(".card-content h3").textContent = news.headline;
        clone.querySelector(".news-date").textContent = news.date;
        // clone.querySelector(".news-description").textContent = news.headline;
        clone.querySelector(".news-source").textContent = "Source: " + news.source;

        clone.querySelector('.card').addEventListener('click', function() {
            window.open(news.link, '_blank');
        });

        return clone;
    }

    // Remove old cards and put specific category cards
    function renderNewsCards(data) {
        cardContainer.innerHTML = ''; // Clear existing news cards
        data.forEach(news => {
            const card = createNewsCard(news);
            cardContainer.appendChild(card);
        });
    }

    fetch('../News_Harbour/News_Harbour/output/htspider.json')
        .then(response => response.json())
        .then(data => {
            newsData = data;
            renderNewsCards(newsData); 
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });

    // Cateogry news seperation (normal)
    const menuItems = document.querySelectorAll('.nav-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.id;
            const filteredNews = newsData.filter(news => news.category === category); // Filter news by category
            renderNewsCards(filteredNews);
        });
    });

});