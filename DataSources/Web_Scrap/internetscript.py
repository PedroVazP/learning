from selenium import webdriver
from time import sleep
from time import time
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
import urllib
import re
import pandas as pd
import numpy as np
from pvlib import pvlib

#https://towardsdatascience.com/how-to-find-housing-in-san-francisco-with-data-science-2991ff503602

pd.set_option('max_colwidth', 5000)
pd.options.display.max_rows = 999

driver = webdriver.Firefox()
    # Open : Instead of webdriver selenium I may use an API in the future

place = ['hillsboro']
#place = ['beaverton']
price = '2000'

craig_title = []
    #This creates a list

url = "https://portland.craigslist.org/search/roo?query="+str(place)+"&sort=date&max_price="+str(price)+"&availabilityMode=0"
    #Full url = "https://portland.craigslist.org/search/roo?query="+orenco+"&sort=date&max_price="2000"&availabilityMode=0"

driver.get(url)
all_posts = driver.find_elements_by_class_name("result-row")

#print (all_posts)

for post in all_posts:
    craig_title.append(post.text)
    #print (post)
    # This appends to an existing list

link_list = []
    # This creates a new list

html_page = urllib.request.urlopen(url)

soup = BeautifulSoup(html_page, "lxml")
    # Documentation: https://www.crummy.com/software/BeautifulSoup/bs4/doc/#installing-a-parser Documentation for BS

#file = "output.txt"
#f= open(file,"a+")
        
for element in soup.findAll("a", {"class": "result-title hdrlnk"}):
    print (element['href'])
    print ("Break 3")
    pvlib.store("{}".format(element['href']))
    #pvlib.store("{}".format(element['href']))
    #pvlib.store("{} \r\n".format(element))
    #Pending to create a function instead of this.

    #for function function.name (args).
        #inside function. Parameters, Logic, Return.
    #file.close()

""" Pending to create an error check. Write vs create new.
        if file = error
        f= open(file,e"w+")
    """
