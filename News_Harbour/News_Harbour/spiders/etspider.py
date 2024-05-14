import scrapy
import re

class EtspiderSpider(scrapy.Spider):
    name = "etspider"
    allowed_domains = ["economictimes.indiatimes.com"]
    start_urls = ["https://economictimes.indiatimes.com/"]

    def parse(self, response):
        articles = response.css(".stryList.clearfix")       
        date = response.css("span.dib.time::text").get()

        for article in articles:
            yield {
                'headline' : article.css("a::text").get(),
                'link' :  article.css("a::attr(href)").get(),
                'img' : article.css("span img::attr(src)").get(),
                'date' : date,
                'source' : "The Economic Times"
            }