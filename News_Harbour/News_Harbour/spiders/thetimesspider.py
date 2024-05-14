import scrapy


class ThetimesspiderSpider(scrapy.Spider):
    name = "thetimesspider"
    allowed_domains = ["www.thetimes.co.uk"]
    start_urls = ["https://www.thetimes.co.uk/"]

    def parse(self, response):
        articles = response.css("div.Item.T-3")       
        date = response.css("time::text").get()

        for article in articles:
            yield {
                'headline' : article.css("a.js-tracking::text").get(),
                'link' : "https://www.thetimes.co.uk/" + article.css("a.js-tracking::attr(href)").get(),
                'img' : article.css("div.is-delayedImageContainer img::attr(src)").get() ,
                'date' : date,
                'source' : "The Times UK"
            }

        