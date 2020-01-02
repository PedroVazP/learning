import pandas as pd
import matplotlib.pyplot as plt
#import matplotlib as plt (Did not work to plot)
#import csv


file = "C:\\Users\\Pedrosky\\Documents\\GitHub\\learning\\Data\\Anacondas\\Panda\\2Dcsv.csv"

df = pd.read_csv(file)
new_df = df.sort_values(["x","y"], ascending=True,)
new_df.plot.scatter(["x"],["y"])

#new_df.plot() (it prints both x and y lines)

#new_df.plot.bar(x='X', stacked=True)
    #another example using bars

plt.show()

print ("here's the data sample")
print (new_df.head())

#print (new_df.head())
#print (new_df [::-1])

#s_df.to_csv(r'C:\\Users\\Pedrosky\\Desktop\\Fitbit data\\No data\\Sleep_data_2019pandas.csv')

#PLOT
    #https://matplotlib.org/3.1.1/gallery/recipes/common_date_problems.html
    #https://pandas.pydata.org/pandas-docs/version/0.19/visualization.html
    #https://www.shanelynn.ie/python-pandas-read_csv-load-data-from-csv-files/



