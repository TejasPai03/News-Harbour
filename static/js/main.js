document.addEventListener("DOMContentLoaded", function() {
    const cardContainer = document.querySelector(".card-container");
    const template = document.getElementById("template-news-card");
    let newsData = [];

    // Dynamically create cards
    function createNewsCard(news) {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".card-image img").src = news.img;
        clone.querySelector(".card-content h4").textContent = news.headline;
        clone.querySelector(".news-date").textContent = news.date;
        // clone.querySelector(".news-description").textContent = news.headline;
        clone.querySelector(".news-source").textContent = "Source: " + news.source;

        clone.querySelector('.card').addEventListener('click', function() {
            window.open(news.link, '_blank');
        });

        return clone;
    }

    // Remove old cards and put specific newspaper cards
    function renderNewsCards(data) {
        cardContainer.innerHTML = ''; // Clear existing news cards
        data.forEach(news => {
            const card = createNewsCard(news);
            cardContainer.appendChild(card);
        });
    }

    // Shuffle news
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Fetch data from multiple JSON files
    function fetchNewsData(jsonFiles) {
        Promise.all(jsonFiles.map(file => fetch(file)))
            .then(responses => Promise.all(responses.map(response => response.json())))
            .then(datas => {
                newsData = datas.flat();
                newsData = shuffleArray(newsData);
                renderNewsCards(newsData); 
            })
            .catch(error => {
                console.error('Error fetching JSON:', error);
            });
    }

    // List the JSON files and map newspapers
    const newspaperJSON = {
        "htimes": '../News_Harbour/News_Harbour/output/htspider.json',
        "toi": '../News_Harbour/News_Harbour/output/toispider.json',
        // Add other json paths
    };

    // Fetch data from JSON
    fetchNewsData(Object.values(newspaperJSON));

    // newsPaper seperation (normal)
    const menuItems = document.querySelectorAll('.nav-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const newspaper = this.id;
            const jsonFile = newspaperJSON[newspaper];
            fetchNewsData([jsonFile]);
        });
    });

});
