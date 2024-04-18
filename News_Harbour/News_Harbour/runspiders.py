from scrapy.crawler import CrawlerProcess
from scrapy.utils.project import get_project_settings

# List of spider names
spider_list = ['htspider']

process = CrawlerProcess(get_project_settings())

for spider_name in spider_list:
    process.crawl(spider_name)

process.start()