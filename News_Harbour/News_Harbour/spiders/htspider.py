import scrapy


class HtspiderSpider(scrapy.Spider):
    name = 'htspider'
    allowed_domains = ['www.hindustantimes.com']
    start_urls = ['http://www.hindustantimes.com/']

    def parse(self, response):
        articles = response.css("div.cartHolder.listView.track.timeAgo")        
        
        for article in articles:
            yield {
                'title' : article.css('h3.hdg3 a::text').get()
            }
        pass