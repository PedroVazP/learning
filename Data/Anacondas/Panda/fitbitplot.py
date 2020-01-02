import pandas as pd
import matplotlib.pyplot as plt
#import matplotlib as plt (Did not work to plot)
#import csv

file = "C:\\Users\\Pedrosky\\Desktop\\Fitbit data\\No data\\Sleep_data_2019 - copia.csv"

df = pd.read_csv(file)
#new_df = df.sort_values(["Minutes Awake","Time in Bed"], ascending=True,)
#new_df = df.sort_values(["Start Time", "End Time",],ascending=True)

#slice_df = df(columns=["Minutes Awake","Time in Bed"])
s_df = df[["Time in Bed","Minutes Awake","Minutes REM Sleep"]]
    #https://datacarpentry.org/python-ecology-lesson/03-index-slice-subset/

print ("here's the data sample")
print (s_df.head())

s_df.plot()

#s_df.plot.bar(x='Start Time', stacked=True)

plt.show()

#print (new_df.head())
#print (new_df [::-1])

#PLOT
    #https://matplotlib.org/3.1.1/gallery/recipes/common_date_problems.html
    #https://pandas.pydata.org/pandas-docs/version/0.19/visualization.html



s_df.to_csv(r'C:\\Users\\Pedrosky\\Desktop\\Fitbit data\\No data\\Sleep_data_2019pandas.csv')




#https://www.shanelynn.ie/python-pandas-read_csv-load-data-from-csv-files/
