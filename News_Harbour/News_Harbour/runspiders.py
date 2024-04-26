from scrapy.crawler import CrawlerProcess
from scrapy.utils.project import get_project_settings
import os
# List of spider names
spider_list = ['htspider']

process = CrawlerProcess(get_project_settings())

for spider_name in spider_list:
    
    output_file = f"Output/{spider_name}.json"

    if os.path.exists(output_file):
            os.remove(output_file)

    process.crawl(spider_name, output_file=output_file)

process.start()