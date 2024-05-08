import scrapy
import re

class HtspiderSpider(scrapy.Spider):
    name = 'htspider'
    allowed_domains = ['www.hindustantimes.com']
    start_urls = ['http://www.hindustantimes.com/']

    def parse(self, response):
        articles = response.css("div.cartHolder.listView.track.timeAgo")        
        date = response.css('div.hDate::text').get()[1:]

        for article in articles:
            category = self.getCategory(article.css('h3 a ::attr(href)').get())
            yield {
                'headline' : article.css('h3.hdg3 a::text').get(),
                'link' : "http://www.hindustantimes.com/" + article.css('h3 a ::attr(href)').get(),
                'img' : article.css('img.lazy::attr(data-src)').get(),
                'category' : category,
                'date' : date,
                'source' : "Hindustan Times"
            }
        
    def getCategory(self, url):
        match = re.search(r"/([^/]+)/", url)
        if match:
            return match.group(1)