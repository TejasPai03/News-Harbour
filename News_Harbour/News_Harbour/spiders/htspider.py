import scrapy
import re

class HtspiderSpider(scrapy.Spider):
    name = 'htspider'
    allowed_domains = ['www.hindustantimes.com']
    start_urls = ['http://www.hindustantimes.com/']
    

    def parse(self, response):
        articles = response.css("div.cartHolder.listView.track.timeAgo")        
        
        for article in articles:
            category = self.getCategory(article.css('h3 a ::attr(href)').get())
            yield {
                'title' : article.css('h3.hdg3 a::text').get(),
                'url' : article.css('h3 a ::attr(href)').get(),
                'img' : article.css('img.lazy::attr(data-src)').get(),
                'category' : category
            }
        pass
        
    def getCategory(self, url):
        match = re.search(r"/([^/]+)/", url)
        if match:
            return match.group(1)