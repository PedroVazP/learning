import pandas as pd


#import csv

file = "C:\\Users\\Pedrosky\\Desktop\\Fitbit data\\No data\\Sleep_data_2019 - copia.csv"

df = pd.read_csv(file)


#new_df = df.sort_values(["Minutes Awake","Time in Bed"], ascending=True,)
new_df = df.sort_values(["Start Time", "End Time",],ascending=True)

print (new_df.mean(0))
#print (new_df.mean(1))
    #secondary axis ¿ https://pandas.pydata.org/pandas-docs/version/0.19/basics.html

print ("here's the data sample")
print (df.head())
print (new_df.head())
#print (new_df [::-1])


new_df.to_csv(r'C:\\Users\\Pedrosky\\Desktop\\Fitbit data\\No data\\Sleep_data_2019pandas.csv')




#https://www.shanelynn.ie/python-pandas-read_csv-load-data-from-csv-files/
