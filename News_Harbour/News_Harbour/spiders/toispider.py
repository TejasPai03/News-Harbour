import scrapy
import re
from time import sleep

class ToispiderSpider(scrapy.Spider):
    name = "toispider"
    allowed_domains = ["timesofindia.indiatimes.com"]
    start_urls = ["https://timesofindia.indiatimes.com/"]

    def parse(self, response):
        articles = response.css("._YVis.false.false")
        date = response.css('.bLzcf.HTz_b::text').get()

        for article in articles:
            category = self.getCategory(article.css('figure a::attr(href)').get())
            yield {
                'headline' : article.css('figcaption::text').get(),
                'link' : article.css('figure a::attr(href)').get(),
                'img' : article.css('div.Bw78m.cardactive img[src]::attr(src)').get(),
                'category' : category,
                'date' : date,
                'source' : "Times of India"
            }
    
    def getCategory(self, url):
        match = re.search(r'indiatimes\.com/([^/]+)/', url)
        if match:
            return match.group(1)
